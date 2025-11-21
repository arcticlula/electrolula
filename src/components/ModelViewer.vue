<template class="stl-viewer">
  <div class="options-div">
    <div class="select-div">
      <n-select class="select-model" v-model:value="selectedModelName" :options="options" />
      <n-button class="select-button" @click="toggleExplode" tertiary v-if="currentModel && currentModel.isGroup">
        <template #icon>
          <n-icon>
            <ArrowMoveInward20Regular v-if="isExploded" />
            <ArrowMove20Regular v-if="!isExploded" />
          </n-icon>
        </template>
      </n-button>
    </div>
    <div class="checkbox-list" v-if="currentModel && currentModel.isGroup">
      <label class="label"><strong>Parts:</strong></label>
      <n-checkbox-group v-model:value="visibleParts" >
        <div class="checkbox-grid">
          <n-checkbox v-for="part in (currentModel.obj as IObjectMediaSrc[])" :key="part.src" :value="part.src">
            {{ part.name ?? 'Unnamed Part' }}
          </n-checkbox>
        </div>
      </n-checkbox-group>
    </div>
    <div class="radio-list" v-if="currentModel && !currentModel.isGroup && Array.isArray(currentModel.obj)">
      <label class="label"><strong>Version:</strong></label>
      <n-radio-group v-model:value="selectedVersionSrc" >
        <div class="radio-grid">
            <n-radio v-for="part in (currentModel.obj as IObjectMediaSrc[])" :key="part.src" :value="part.src">
              {{ part.name ?? '???' }}
            </n-radio>
        </div>
      </n-radio-group>
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

import { IObjectMedia, IObjectMediaSrc } from '../models/media';

const props = defineProps<{ models: IObjectMedia[], backgroundColor: number }>();

const viewerContainer = ref<HTMLDivElement | null>(null);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let currentGroup: THREE.Group | null = null;

const stlLoader = new STLLoader();
const vrmlLoader = new VRMLLoader();

const selectedModelName = ref<string | null>(null);
const visibleParts = ref<string[]>([]);
const selectedVersionSrc = ref<string | null>(null);

let currentModuleName: string | null = null;
const isExploded = ref(false);
let originalPositions = new Map<string, THREE.Vector3>();
let baseDirections = new Map<string, THREE.Vector3>();
let modelSize = 1;


const allParts = computed<IObjectMediaSrc[]>(() => {
  const p: IObjectMediaSrc[] = [];
  props.models.forEach((m) => {
    if (Array.isArray(m.obj)) p.push(...m.obj);
    else if (m.obj) p.push(m.obj);
  });
  return p;
});

const options = computed(() =>
  props.models.map((m) => ({
    label: m.name,
    value: m.name,
  }))
);

const currentModel = computed(() =>
  props.models.find((m) => m.name === selectedModelName.value)
);

const filePaths = computed(() => {
  if (!currentModel.value) {
    return [];
  }
  
  if (currentModel.value.isGroup) { // group of parts
    return visibleParts.value;
  }
  
  if (Array.isArray(currentModel.value.obj)) { // multiple versions
    return selectedVersionSrc.value ? [selectedVersionSrc.value] : [];
  }
  
  const part = currentModel.value.obj; // single part
  return part.src ? [part.src] : [];
});

watch(() => props.models,
  (models) => {
    if (models.length && !selectedModelName.value) {
      selectedModelName.value = models[0].name;
    }
  },
  { immediate: true }
);

watch(currentModel,
  (newModel) => {
    if (!newModel) {
      visibleParts.value = [];
      selectedVersionSrc.value = null;
    }
    else if (newModel.isGroup && Array.isArray(newModel.obj)) { // show all parts
      visibleParts.value = newModel.obj.map((o) => o.src);
    } 
    else if (Array.isArray(newModel.obj)) { // multiple versions
      visibleParts.value = [];
      selectedVersionSrc.value = newModel.obj[newModel.obj.length - 1]?.src; //choose last version by default
    }
    else { // single part
      visibleParts.value = [];
      selectedVersionSrc.value = null;
    }

    loadModel();
  },
  { immediate: true }
);

watch(visibleParts, () => {
  if (currentModel.value?.isGroup) {
    loadModel();
  }
});

watch(selectedVersionSrc, () => {
  if (!currentModel.value?.isGroup) {
    loadModel();
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

  const isNewModule = currentModel.value?.name !== currentModuleName;

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
    currentModuleName = currentModel.value?.name ?? null;

    if (currentModel.value?.isGroup) {
      const fullMeshes: THREE.Mesh[] = [];
      
      const allModelParts = Array.isArray(currentModel.value?.obj) 
        ? currentModel.value.obj 
        : currentModel.value?.obj 
          ? [currentModel.value.obj] 
          : [];
      
      for (const p of allModelParts) {
        const isVRML = p.src.toLowerCase().endsWith('.wrl') || p.src.toLowerCase().endsWith('.vrml');
        
        if (!isVRML) {
          const geom = await loadSTL(p.src);
          const mesh = createMeshWithMaterial(geom, p.src);
          mesh.position.set(0, 0, 0);
          mesh.userData.src = p.src;
          fullMeshes.push(mesh);
        }
      }

      const tempGroup = new THREE.Group();
      fullMeshes.forEach(m => tempGroup.add(m));
      tempGroup.updateMatrixWorld(true);

      computeBaseExplosionVectors(fullMeshes, tempGroup);
      fitCameraToModel(tempGroup);
    } else {
      fitCameraToModel(currentGroup);
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

    const dir = baseDirections.get(key);
    if (!dir) return;

    const target = mesh.position.clone().add(dir.clone().multiplyScalar(distance));

    animateMeshPosition(mesh, target);
  });
}

function reapplyExplosion() {
  const distance = modelSize * 0.25;

  currentGroup!.children.forEach((mesh) => {
    if (!(mesh instanceof THREE.Mesh)) return;

    const dir = baseDirections.get(mesh.userData.src);
    if (!dir) return;

    const target = mesh.position.clone().add(dir.clone().multiplyScalar(distance));
    mesh.position.copy(target);
  });
}

function computeBaseExplosionVectors(meshes: THREE.Mesh[], referenceGroup: THREE.Group) {
  baseDirections.clear();

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