<template class="stl-viewer">
  <div class="options-div">
    <div class="select-div">
      <n-cascader class="select-model" v-model:value="cascaderValue" :options="cascadeOptions" :show-path="true" check-strategy="child"/>
      <n-button class="select-button" @click="toggleExplode" tertiary v-if="selectedVersionIsGroup">
        <template #icon>
          <n-icon>
            <ArrowMoveInward20Regular v-if="isExploded" />
            <ArrowMove20Regular v-if="!isExploded" />
          </n-icon>
        </template>
      </n-button>
      </div>
      <div class="radio-list" v-if="versionOptions.length > 0 && !selectedVersionIsGroup">
        <label class="label"><strong>Version:</strong></label>
        <n-radio-group v-model:value="selectedVersionSrc" >
          <div class="radio-grid">
              <n-radio v-for="version in versionOptions" :key="version.value" :value="version.value">
                {{ version.label }}
              </n-radio>
          </div>
        </n-radio-group>
      </div>
      <div class="checkbox-list" v-if="selectedVersionIsGroup">
      <label class="label"><strong>Parts:</strong></label>
      <n-checkbox-group v-model:value="visibleParts" >
        <div class="checkbox-grid">
            <n-checkbox v-for="part in currentVersionChildren" :key="part.src" :value="part.src">
              {{ (part as any).name ?? (part as any).label ?? 'Unnamed Part' }}
            </n-checkbox>
        </div>
      </n-checkbox-group>
    </div>
    
  </div>
  <div ref="viewerContainer" class="viewer"></div>
</template>

<script setup lang="ts">
import { ArrowMove20Regular, ArrowMoveInward20Regular } from '@vicons/fluent';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { VRMLLoader } from "three/examples/jsm/loaders/VRMLLoader.js";
import { computed, onMounted, ref, watch } from 'vue';

import { IModel, ICascadeCategory } from '../models/media';

const props = defineProps<{ models: ICascadeCategory[], backgroundColor?: number }>();

const viewerContainer = ref<HTMLDivElement | null>(null);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let currentGroup: THREE.Group | null = null;

const stlLoader = new STLLoader();
const vrmlLoader = new VRMLLoader();

const selectedPath = ref<string[] | null>(null);
const previousSelectedPath = ref<string[] | null>(null);
const cascaderValue = ref<string | null>(null);

const visibleParts = ref<string[]>([]);
const selectedVersionSrc = ref<string | null>(null);

let currentModuleName: string | null = null;
const isExploded = ref(false);
let originalPositions = new Map<string, THREE.Vector3>();
let baseDirections = new Map<string, THREE.Vector3>();
let customExplodeOffsets = new Map<string, { x: number; y: number; z: number }>();
let modelSize = 1;

// Cache for model lookups to avoid repeated searching
let modelLookupCache = new Map<string, any>();

// collect all parts (to match file paths with color/opacity)
const allParts = computed<IModel[]>(() => {
  const p: IModel[] = [];
  
  const collectSrcs = (items: any[]) => {
    (items || []).forEach((item: any) => {
      if (item.src) {
        p.push(item as IModel);
      }

      if (item.children && Array.isArray(item.children)) {
        collectSrcs(item.children);
      }
    });
  };
  
  (props.models as ICascadeCategory[]).forEach((group) => {
    collectSrcs(group.children || []);
  });
  
  return p;
});

// build cascader options (2 levels: group → part)
const cascadeOptions = computed(() => {
  modelLookupCache.clear();
  
  const options = (props.models as ICascadeCategory[]).map(group => {
    modelLookupCache.set(group.key, group);
    return {
      label: group.label,
      value: group.key,
      children: (group.children || []).map((part: any) => {
        modelLookupCache.set(part.key, part);
        return { label: part.label, value: part.key }
      })
    }
  });
  return options;
});

const versionData = computed(() => {
  const none = { versionOptions: [], isGroup: false, children: [], filePaths: [] };
  if (!selectedPath.value || selectedPath.value.length < 2) {
    return none;
  }

  const [groupKey, partKey] = selectedPath.value;
  const group = modelLookupCache.get(groupKey);
  if (!group || !group.children) {
    return none;
  }

  const part = group.children.find((p: any) => p.key === partKey);
  if (!part || !part.children) {
    return none;
  }

  const versionOptions = (part.children as any[]).map((v: any) => {
    const isGroup = !!(v as any).children && (v as any).children.length > 0;
    const value = (v as any).isGroup || isGroup ? (v.key || v.src) : (v.src || v.key);
    return {
      label: v.label,
      value,
      isGroup,
      children: (v as any).children,
      src: (v as any).src,
      colorHex: (v as any).colorHex,
      opacity: (v as any).opacity
    };
  });

  const currentVersion = versionOptions.find(v => v.value === selectedVersionSrc.value);
  const isCurrentGroup = !!(currentVersion && currentVersion.children && currentVersion.children.length > 0);
  
  let children: any[] = [];
  let filePaths: string[] = [];
  
  if (selectedVersionSrc.value) {
    if (selectedVersionSrc.value.includes('/')) {
      filePaths = [selectedVersionSrc.value];
    } else if (currentVersion) {
      if (isCurrentGroup && currentVersion.children) {
        children = (currentVersion.children as any[]).map((c: any) => ({
          src: c.src,
          label: c.label
        }));
        filePaths = visibleParts.value.length > 0 ? visibleParts.value : [];
      } else if (currentVersion.src) {
        filePaths = [currentVersion.src];
      }
    }
  }

  return { versionOptions, isGroup: isCurrentGroup, children, filePaths };
});

const versionOptions = computed(() => versionData.value.versionOptions);
const selectedVersionIsGroup = computed(() => versionData.value.isGroup);
const currentVersionChildren = computed(() => versionData.value.children);
const filePaths = computed(() => versionData.value.filePaths);

// Initialize default selection when models are ready
watch(() => props.models, () => {
  if (selectedPath.value) return;
  
  const models = props.models as ICascadeCategory[];
  if (!models || models.length === 0) return;
  
  // trigger cascadeOptions computation to populate cache
  void cascadeOptions.value;
  
  const firstCat = models[0];
  const firstChild = firstCat.children && firstCat.children[0];
  if (firstCat && firstChild) {
    selectedPath.value = [firstCat.key, (firstChild as any).key];
    cascaderValue.value = (firstChild as any).key;
  }
}, { immediate: true });

// When cascader changes, convert leaf value back to full [group, part] path
watch(cascaderValue, (leafValue) => {
  if (!leafValue) {
    selectedPath.value = null;
    return;
  }

  // leafValue is the part key; find which group it belongs to
  const partKey = Array.isArray(leafValue) ? leafValue[0] : leafValue;
  
  // Search for the group that contains this part
  for (const group of props.models as ICascadeCategory[]) {
    if (group.children && group.children.find((p: any) => p.key === partKey)) {
      selectedPath.value = [group.key, partKey];
      return;
    }
  }
});

// when the cascader path changes, default the version selection
watch(selectedPath, (path) => {
  if (!path || path.length < 2) return;
  
  // Use versionData directly to get the versions
  const [groupKey, partKey] = path;
  const group = modelLookupCache.get(groupKey);
  if (!group || !group.children) {
    selectedVersionSrc.value = null;
    visibleParts.value = [];
    loadModel();
    return;
  }

  const part = group.children.find((p: any) => p.key === partKey);
  if (!part || !part.children || part.children.length === 0) {
    selectedVersionSrc.value = null;
    visibleParts.value = [];
    loadModel();
    return;
  }

  // Select the last version by default
  const versions = part.children as any[];
  const last = versions[versions.length - 1];
  const isGroup = !!(last.children && last.children.length > 0);
  const value = isGroup ? (last.key || last.src) : (last.src || last.key);
  
  selectedVersionSrc.value = value;
  if (isGroup && last.children) {
    visibleParts.value = (last.children as any[]).map((c: any) => c.src);
  } else {
    visibleParts.value = [];
  }
  loadModel();
}, { immediate: true });

// when a version is selected in cascade mode, update visibleParts
watch(selectedVersionSrc, (val) => {
  if (!val || !selectedPath.value || selectedPath.value.length < 2) {
    loadModel();
    return;
  }
  
  const [groupKey, partKey] = selectedPath.value;
  const group = modelLookupCache.get(groupKey);
  if (!group || !group.children) {
    loadModel();
    return;
  }

  const part = group.children.find((p: any) => p.key === partKey);
  if (!part || !part.children) {
    loadModel();
    return;
  }

  const versionObj = part.children.find((v: any) => {
    const isGroup = !!(v.children && v.children.length > 0);
    const value = isGroup ? (v.key || v.src) : (v.src || v.key);
    return value === val;
  });

  if (versionObj && versionObj.children) {
    visibleParts.value = (versionObj.children as any[]).map((c: any) => c.src);
  }
  loadModel();
}, { immediate: true });

watch(visibleParts, () => {
  // For assembly groups: just toggle mesh visibility instead of reloading
  if (!selectedVersionIsGroup.value || !currentGroup) {
    loadModel();
    return;
  }

  const visibleSet = new Set(visibleParts.value);
  currentGroup.children.forEach((mesh) => {
    if (mesh instanceof THREE.Mesh || (mesh instanceof THREE.Object3D && mesh.children.length > 0)) {
      const src = mesh.userData.src as string;
      mesh.visible = visibleSet.has(src);
    }
  });
  
  if (isExploded.value) {
    reapplyExplosion();
  }
}, { deep: true });


watch(selectedVersionIsGroup, (isGroup) => {
  if (!isGroup && isExploded.value) {
    isExploded.value = false;
    resetModel();
  }
});

onMounted(() => {
  initThree();
  loadModel();
  animate();
});

function initThree() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(props.backgroundColor || 0x000000);

  const w = viewerContainer.value!.clientWidth;
  const h = 500;

  camera = new THREE.PerspectiveCamera(45, w / h, 0.01, 10000);
  camera.position.set(0, 0, 100);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  viewerContainer.value!.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
  keyLight.position.set(5, 5, 5);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
  fillLight.position.set(-5, 0, -5);
  scene.add(fillLight);

  const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
  backLight.position.set(0, -5, -5);
  scene.add(backLight);
}

async function loadModel() {
  if (!filePaths.value.length) return;

  const cascaderChanged = JSON.stringify(previousSelectedPath.value) !== JSON.stringify(selectedPath.value);
  previousSelectedPath.value = selectedPath.value ? [...selectedPath.value] : null;

  const isNewModule = selectedVersionSrc.value !== currentModuleName;

  if (currentGroup) scene.remove(currentGroup);
  currentGroup = new THREE.Group();

  const meshes: THREE.Mesh[] = [];
  for (const path of filePaths.value) {
    const isVRML = path.toLowerCase().endsWith('.wrl') || path.toLowerCase().endsWith('.vrml');
    
    if (isVRML) {
      const vrmlScene = await loadVRML(path);
      vrmlScene.userData.src = path;
      meshes.push(vrmlScene as any);
      currentGroup.add(vrmlScene);
    } else {
      const geom = await loadSTL(path);
      const mesh = createMeshWithMaterial(geom, path);
      mesh.position.set(0, 0, 0);
      mesh.userData.src = path;
      meshes.push(mesh);
      currentGroup.add(mesh);
    }
  }

  scene.add(currentGroup);

  if (isNewModule) {
    currentModuleName = selectedVersionSrc.value ?? null;

    // if the selected version is a group, compute explosion vectors from the loaded meshes
    const v = versionOptions.value.find(v => v.value === selectedVersionSrc.value);
    if (v && v.isGroup && v.children) {
      // Filter STL meshes only for explosion calculations
      const stlMeshes = meshes.filter(m => !(m instanceof THREE.Object3D && m.children.length > 0));
      if (stlMeshes.length > 0) {
        const tempGroup = new THREE.Group();
        stlMeshes.forEach(m => tempGroup.add(m.clone()));
        tempGroup.updateMatrixWorld(true);
        computeBaseExplosionVectors(stlMeshes, tempGroup, v.children as any[]);
      }
      
      if (cascaderChanged) {
        fitCameraToModel(currentGroup);
      }
    } else {
      if (cascaderChanged) {
        fitCameraToModel(currentGroup);
      }
    }
  } else {
    controls.update();
  }

  // Store original positions for newly loaded meshes (only for STL meshes)
  currentGroup.children.forEach((mesh) => {
    if (!(mesh instanceof THREE.Mesh)) return;
    const key = mesh.userData.src;
    if (!originalPositions.has(key)) {
      originalPositions.set(key, mesh.position.clone());
    }
  });

  if (isExploded.value) {
    reapplyExplosion();
  }
}


function loadSTL(path: string): Promise<THREE.BufferGeometry> {
  return new Promise((resolve, reject) => {
    stlLoader.load(path, resolve, undefined, reject);
  });
}

function loadVRML(path: string): Promise<THREE.Scene> {
  return new Promise((resolve, reject) => {
    vrmlLoader.load(path, resolve, undefined, reject);
  });
}

function createMeshWithMaterial(geometry: THREE.BufferGeometry, path: string) {
  geometry.computeVertexNormals();

  const fileKey = path.toLowerCase().split("/").pop()!;
  const part = allParts.value.find((p) =>
    fileKey.includes(p.src.split("/").pop()!.toLowerCase())
  );

  const colorHex = part?.colorHex ?? "0xffffff";
  const opacity = part?.opacity ?? 1;

  const size = 128;
  const data = new Uint8Array(size * size * 4);
  for (let i = 0; i < data.length; i++) data[i] = 128 + Math.random() * 40;
  const noise = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  noise.wrapS = noise.wrapT = THREE.RepeatWrapping;
  noise.repeat.set(10, 10);
  noise.needsUpdate = true;

  const material = new THREE.MeshStandardMaterial({
    color: parseInt(colorHex.replace("#", ""), 16),
    transparent: opacity < 1,
    opacity,
    roughness: 0.6,
    metalness: 0.05,
    emissive: 0x111111,
    normalMap: noise,
    normalScale: new THREE.Vector2(0.2, 0.2),
    side: THREE.DoubleSide,
  });

  material.onBeforeCompile = (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      `#include <dithering_fragment>`,
      `
        #include <dithering_fragment>
        float rim = 1.0 - max(dot(normalize(vNormal), normalize(vec3(0.0, 0.5, 1.0))), 0.0);
        gl_FragColor.rgb += rim * 0.25;
      `
    );
  };

  return new THREE.Mesh(geometry, material);
}

function fitCameraToModel(obj?: THREE.Object3D) {
  const targetObj = obj ?? currentGroup;
  if (!targetObj) return;

  const box = new THREE.Box3().setFromObject(targetObj);
  const size = box.getSize(new THREE.Vector3()).length();
  const center = box.getCenter(new THREE.Vector3());

  controls.target.copy(center);
  camera.position.copy(center).addScalar(size * 0.8);
  camera.lookAt(center);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

function toggleExplode() {
  if (!currentGroup) return;

  if (!isExploded.value) {
    explodeModel();
  } else {
    resetModel();
  }

  isExploded.value = !isExploded.value;
}

function explodeModel() {
  if (!currentGroup) return;

  originalPositions.clear();

  const distance = modelSize * 0.25;

  currentGroup.children.forEach((mesh) => {
    if (!(mesh instanceof THREE.Mesh)) return;

    const key = mesh.userData.src;
    originalPositions.set(key, mesh.position.clone());

    const customOffset = customExplodeOffsets.get(key);
    let target: THREE.Vector3;
    
    if (customOffset) {
      // Use custom explode offset if defined
      target = mesh.position.clone().add(new THREE.Vector3(customOffset.x, customOffset.y, customOffset.z));
    } else {
      // Fall back to computed direction-based explosion
      const dir = baseDirections.get(key);
      if (!dir) return;
      target = mesh.position.clone().add(dir.clone().multiplyScalar(distance));
    }

    animateMeshPosition(mesh, target);
  });
}

function reapplyExplosion() {
  const distance = modelSize * 0.25;

  currentGroup!.children.forEach((mesh) => {
    if (!(mesh instanceof THREE.Mesh)) return;

    const key = mesh.userData.src;
    const customOffset = customExplodeOffsets.get(key);
    let target: THREE.Vector3;
    
    if (customOffset) {
      target = originalPositions.get(key)!.clone().add(new THREE.Vector3(customOffset.x, customOffset.y, customOffset.z));
    } else {
      const dir = baseDirections.get(key);
      if (!dir) return;
      target = mesh.position.clone().add(dir.clone().multiplyScalar(distance));
    }
    
    mesh.position.copy(target);
  });
}

function computeBaseExplosionVectors(meshes: THREE.Mesh[], referenceGroup: THREE.Group, parts?: any[]) {
  baseDirections.clear();
  customExplodeOffsets.clear();

  const box = new THREE.Box3().setFromObject(referenceGroup);
  const centerWorld = box.getCenter(new THREE.Vector3());
  const centerLocal = referenceGroup.worldToLocal(centerWorld.clone());

  modelSize = box.getSize(new THREE.Vector3()).length();

  for (const mesh of meshes) {
    const meshBox = new THREE.Box3().setFromObject(mesh);
    const meshCenterWorld = meshBox.getCenter(new THREE.Vector3());
    const meshCenterLocal = referenceGroup.worldToLocal(meshCenterWorld.clone());

    const dir = meshCenterLocal.clone().sub(centerLocal);

    if (dir.length() < 0.0001) {
      dir.set(0, 0, 0);
    } else {
      dir.normalize();
    }

    baseDirections.set(mesh.userData.src, dir);
    
    if (parts) {
      const partData = parts.find((p: any) => p.src === mesh.userData.src) as IModel | undefined;
      if (partData?.explodeOffset) {
        customExplodeOffsets.set(mesh.userData.src, partData.explodeOffset);
      }
    }
  }
}

function resetModel() {
  if (!currentGroup) return;

  currentGroup.children.forEach(mesh => {
    if (!(mesh instanceof THREE.Mesh)) return;

    const orig = originalPositions.get(mesh.userData.src);
    if (!orig) return;

    animateMeshPosition(mesh, orig);
  });
}

function animateMeshPosition(mesh: THREE.Object3D, target: THREE.Vector3) {
  const start = mesh.position.clone();
  const duration = 0.35;
  const startTime = performance.now();

  function update() {
    const elapsed = (performance.now() - startTime) / 1000;
    const t = Math.min(elapsed / duration, 1);

    mesh.position.lerpVectors(start, target, t);

    if (t < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}
</script>

<style scoped lang="sass">
  .stl-viewer
    text-align: center

  .options-div
    display: flex
    flex-direction: row
    align-items: center

  .select-div
    display: flex
    width: 100%
    flex: 1 1 0%
    min-width: 0
    margin-bottom: 8px

  .select-button
    margin-left: 16px

  .checkbox-list, .radio-list
    display: flex
    flex-direction: row
    flex: 0 0 auto !important    
    width: max-content
    min-width: max-content
    margin-left: 16px

  .checkbox-grid
    display: grid
    grid-auto-flow: column
    grid-template-columns: repeat(auto-fit, minmax(max-content, 1fr))

    .n-checkbox
      display: flex
      align-items: center
      flex-direction: row
      white-space: nowrap

  .radio-grid
    display: grid
    grid-auto-flow: column
    grid-template-columns: repeat(auto-fit, minmax(50px, max-content))

    .n-radio
      display: flex
      align-items: center
      flex-direction: row
      white-space: nowrap

  .label
    margin-right: 8px
    margin-bottom: 4px

  @media (max-width: 1300px)
    .options-div
      flex-direction: column
      align-items: flex-start
    .select-div
      margin-bottom: 8px
    .select-button
      margin-left: 8px
    .checkbox-list, .radio-list
      width: 100%
      min-width: 0
      flex-direction: column
      margin-bottom: 8px
      margin-left: 0
    .checkbox-grid
      grid-auto-flow: unset
      grid-template-columns: repeat(auto-fit, minmax(80px, 150px))
      column-gap: 8px
      row-gap: 8px
    .radio-grid
      grid-auto-flow: unset
      grid-template-columns: repeat(auto-fit, minmax(50px, 150px))
      column-gap: 8px
      row-gap: 8px
</style>