<template>
  <n-config-provider
    :theme="darkTheme"
    :theme-overrides="themeOverrides"
    class="app-container"
    @mousemove="handleMouseMove"
  >
    <n-global-style />

    <div
      class="background-layer"
      :style="dynamicBackgroundStyle"
      :key="route.name"
    />

    <div class="content-wrapper">
      <n-flex class="header" justify="center">
        <router-link to="/"><n-button text>Home</n-button></router-link> |
        <router-link to="/projects"><n-button text>Projectos</n-button></router-link> |
        <router-link to="/cv"><n-button text>CV</n-button></router-link> |
        <router-link to="/about"><n-button text>Acerca</n-button></router-link>
      </n-flex>
      <div class="body">
        <router-view />
      </div>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, GlobalThemeOverrides } from 'naive-ui'
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    lineHeight: '1.3',
    fontFamily: "monospace",
  },
}

const mouseX = ref(0)
const mouseY = ref(0)
const route = useRoute()

function handleMouseMove(event: MouseEvent) {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

const cvBackground = 'linear-gradient(to right, rgba(255,198,194,0.4), rgba(195,224,221,0.4), rgba(250,233,218,0.4))'
const crosshatchBackground = `
  repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(16, 185, 129, 0.18) 2px, rgba(16, 185, 129, 0.18) 3px, transparent 3px, transparent 8px),
  repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(245, 101, 101, 0.10) 2px, rgba(245, 101, 101, 0.10) 3px, transparent 3px, transparent 8px),
  repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(234, 179, 8, 0.08) 2px, rgba(234, 179, 8, 0.08) 3px, transparent 3px, transparent 8px),
  repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(249, 115, 22, 0.06) 2px, rgba(249, 115, 22, 0.06) 3px, transparent 3px, transparent 8px)
`

const backgroundDefinitions = {
  cv: (x: number, y: number) => ({
    backgroundImage: cvBackground,
    backgroundColor: 'black',
    backgroundSize: 'auto',
    backgroundPosition: '0 0',
    transition: 'none',
  }),
  
  crosshatch: (x: number, y: number) => {
    const pos1 = `${x / -20}px ${y / 30}px`;
    const pos2 = `${x / 15}px ${y / -25}px`;
    const pos3 = `${x / -10}px ${y / 15}px`;
    const pos4 = `${x / 25}px ${y / -10}px`;
    return {
      backgroundImage: crosshatchBackground,
      backgroundColor: 'black',
      backgroundSize: 'auto',
      backgroundPosition: `${pos1}, ${pos2}, ${pos3}, ${pos4}`,
      transition: 'background-position 0.1s ease-out',
    }
  },

  black: (x: number, y: number) => ({
    backgroundColor: 'black',
    transition: 'none',
  }),
}

const defaultBackgroundKey: keyof typeof backgroundDefinitions = 'crosshatch';

const dynamicBackgroundStyle = computed(() => {
  const bgKey = (route.meta.background as keyof typeof backgroundDefinitions) || defaultBackgroundKey;
  const styleFn = backgroundDefinitions[bgKey] || backgroundDefinitions[defaultBackgroundKey];
  return styleFn(mouseX.value, mouseY.value);
})

watch(() => route.name, () => {
    document.body.style.background = 'black';
}, { immediate: true })
</script>

<style scoped lang="sass">
.app-container
  position: relative
  min-height: 100vh
  width: 100%
  overflow: hidden

.background-layer
  position: absolute
  inset: 0
  z-index: 0
  pointer-events: none

.content-wrapper
  position: relative
  z-index: 10
  min-height: 100vh

.body
  margin: 16px 32px

.header
  padding: 16px
  > *
    margin: 0 16px
</style>