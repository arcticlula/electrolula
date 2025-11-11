<template>
  <div class="layout-wrapper" @mousemove="onMouseMove">
    <div
      class="pattern-background"
      :style="dynamicPatternStyle"
    />

    <div class="content-slot">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 1. Refs to store the current mouse position
const mouseX = ref(0);
const mouseY = ref(0);

// 2. The base background image string (unchanged)
const baseBackgroundImage = `
  repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(16, 185, 129, 0.18) 2px, rgba(16, 185, 129, 0.18) 3px, transparent 3px, transparent 8px),
  repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(245, 101, 101, 0.10) 2px, rgba(245, 101, 101, 0.10) 3px, transparent 3px, transparent 8px),
  repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(234, 179, 8, 0.08) 2px, rgba(234, 179, 8, 0.08) 3px, transparent 3px, transparent 8px),
  repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(249, 115, 22, 0.06) 2px, rgba(249, 115, 22, 0.06) 3px, transparent 3px, transparent 8px)
`;

// 3. A handler function to update mouse coordinates
function onMouseMove(event) {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
}

// 4. A computed property to dynamically generate the style
const dynamicPatternStyle = computed(() => {
  // Divide mouse coordinates by different factors for a parallax effect.
  // Each gradient layer will move at a different speed and/or direction.
  const x = mouseX.value;
  const y = mouseY.value;

  // Position for each of the 4 gradients
  const pos1 = `${x / -20}px ${y / 30}px`;
  const pos2 = `${x / 15}px ${y / -25}px`;
  const pos3 = `${x / -10}px ${y / 15}px`;
  const pos4 = `${x / 25}px ${y / -10}px`;

  return {
    backgroundImage: baseBackgroundImage,
    // Apply the unique positions to each corresponding background layer
    backgroundPosition: `${pos1}, ${pos2}, ${pos3}, ${pos4}`,
  };
});
</script>

<style scoped>
.layout-wrapper {
  min-height: 100vh;
  width: 100%;
  background-color: #0f0f0f;
  position: relative;
  color: #ffffff;
  /* Add overflow: hidden to prevent scrollbars if content is small */
  overflow: hidden;
}

.pattern-background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
  
  /* This is the key for smoothness!
    It eases the background-position change instead of it being instant.
  */
  transition: background-position 0.1s ease-out;
}

.content-slot {
  position: relative;
  z-index: 10;
}
</style>