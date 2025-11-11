<template>
    <n-select v-model:value="selectedModelName" :options="options" />
    <!-- <n-cascader
      v-model:value="selectedModelName"
      expand-trigger="hover"
      :options="options"
      check-strategy="child"
      :show-path="true"
    /> -->
    <vue3dLoader
      ref="viewer"
      :height="400"
      :filePath="filePaths"
      :scale="{ x:1, y:1, z:1 }"
      :rotation="{ x:0, y:0, z:0 }"
      :cameraPosition="cameraPosition"
      :lights="[
        { type: 'AmbientLight', color: 0x404040 },
        { type: 'DirectionalLight', color: 0xffffff, intensity: 0.8, position: { x: 10, y: 10, z: 10 } }
      ]"
      :backgroundColor="0x000"
      :outputEncoding="'sRGB'"
      @mouseup="storeCamera"
      @wheel="storeCamera"
      @load="onModelLoad"
    ></vue3dLoader>
    <div v-if="currentModel && currentModel.isGroup" class="checkbox-list">
      <n-checkbox-group v-model:value="visibleParts">
        <n-space>
          <n-checkbox v-for="part in currentModel.obj" :key="part.src" :value="part.src">
            {{ part.name ?? 'Unnamed Part' }}
          </n-checkbox>
        </n-space>
      </n-checkbox-group>
    </div>
    <div v-if="currentModel && !currentModel.isGroup && Array.isArray(currentModel.obj)" class="checkbox-list">
    <n-radio-group v-model:value="selectedVersionSrc">
      <n-space>
        <n-radio v-for="part in (currentModel.obj)" :key="part.src" :value="part.src">
          {{ part.name ?? 'Unnamed Version' }}
        </n-radio>
      </n-space>
    </n-radio-group>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { IObjectMedia, IObjectMediaSrc } from '../models/media';
import * as THREE from 'three'

const props = defineProps<{ models: IObjectMedia[] }>();

const options = computed(() =>
  props.models.map((m) => ({
    label: m.name,
    value: m.name,
  }))
);

const viewer = ref<any>(null);
const cameraPosition = ref({ x: 0, y: 0, z: -200 });

const allParts = computed<IObjectMediaSrc[]>(() => {
  const parts: IObjectMediaSrc[] = [];
  props.models.forEach(model => {
    if (model.obj) {
      if (Array.isArray(model.obj)) {
        parts.push(...model.obj);
      } else {
        parts.push(model.obj as IObjectMediaSrc);
      }
    }
  });
  return parts;
});

const selectedModelName = ref<string | null>(null);
const visibleParts = ref<string[]>([]);
const selectedVersionSrc = ref<string | null>(null);

watch(() => props.models,
  (models) => {
    if (models.length && !selectedModelName.value) {
      selectedModelName.value = models[0].name;
    }
  },
  { immediate: true }
);

const currentModel = computed(() =>
  props.models.find((m) => m.name === selectedModelName.value)
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
  },
  { immediate: true }
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

function onModelLoad(event: any) {
  const meshes = (event?.children || []).filter(
    (child: any) => child.type === 'Mesh'
  )

  if (!currentModel.value) return;
  // --- Create a tiny procedural noise texture for normal mapping ---
  const size = 128
  const data = new Uint8Array(size * size * 3)
  for (let i = 0; i < data.length; i++) {
    // subtle random variation
    data[i] = 128 + Math.random() * 40
  }

  const noiseTexture = new THREE.DataTexture(
    data,
    size,
    size,
    THREE.RGBAFormat
  )

  noiseTexture.wrapS = THREE.RepeatWrapping
  noiseTexture.wrapT = THREE.RepeatWrapping
  noiseTexture.repeat.set(10, 10)
  noiseTexture.needsUpdate = true

  meshes.forEach((mesh: any) => {
    if (!mesh.material) return

    const srcKey = mesh.fileName.toLowerCase();

    const match = allParts.value.find((obj: IObjectMediaSrc) =>
      srcKey.includes(obj.src.split('/').pop()?.toLowerCase() ?? '')
    );

    const colorHex = match?.colorHex ?? '0xffffff';
    const color = parseInt(colorHex.replace(/^#/, ''), 16);
    const opacity = match?.opacity ?? 1; // Get opacity, default to 1 (fully opaque)

    mesh.geometry.computeVertexNormals?.();

    // Realistic “PLA” plastic
    const material = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.6,
      metalness: 0.05,
      emissive: 0x111111,
      normalMap: noiseTexture,
      normalScale: new THREE.Vector2(0.2, 0.2),
      envMapIntensity: 0.3,
      side: THREE.DoubleSide,
      transparent: opacity < 1,
      opacity: opacity, 
    })

    // const material = new THREE.MeshStandardMaterial({
    //   color,
    //   roughness: 0.4,
    //   metalness: 0.2,
    //   emissive: 0x111111,
    //   envMapIntensity: 0.6,
    //   side: THREE.DoubleSide,
    // });

    // material.onBeforeCompile = (shader) => {
    //   shader.fragmentShader = shader.fragmentShader.replace(
    //     `#include <dithering_fragment>`,
    //     `
    //       #include <dithering_fragment>
    //       float rim = 1.0 - max(dot(normalize(vNormal), normalize(vec3(0.0, 0.5, 1.0))), 0.0);
    //       gl_FragColor.rgb += rim * 0.25;
    //     `
    //   );
    // };

    material.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader.replace(
        `#include <dithering_fragment>`,
        `
          #include <dithering_fragment>
          float rim = 1.0 - max(dot(normalize(vNormal), normalize(vec3(0.0, 0.5, 1.0))), 0.0);
          gl_FragColor.rgb += rim * 0.25;
        `
      )
    }

    mesh.material = material;
    mesh.material.needsUpdate = true
    // mesh.material.color.setHex(colorHex)
    // mesh.material.roughness = 0.45;
    // mesh.material.metalness = 0.1;    
    // mesh.material.emissive.setHex(0x111111)
    // // mesh.material.shininess = 60
  })

  if (cameraPosition.value && viewer.value?.camera) {
    const cam = viewer.value.camera;
    cam.position.set(
      cameraPosition.value.x,
      cameraPosition.value.y,
      cameraPosition.value.z
    );
    cam.updateProjectionMatrix();
  }
}

function storeCamera() {
  // Grab the current camera from vue3dLoader internals
  const cam = viewer.value?.scene?.camera || viewer.value?.camera;
  if (!cam) return;

  cameraPosition.value = {
    x: cam.position.x,
    y: cam.position.y,
    z: cam.position.z,
  };
}
</script>

<style scoped lang="sass">

  .checkbox-list
    margin-top: 1rem
</style>