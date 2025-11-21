<template>
  <div class="carousel-div">
    <n-image-group>
      <n-carousel class="carousel" :show-arrow="!isMobile" :show-dots="isMobile" dot-type="line" @update:current-index="i => selectedIndex = i">
        <template v-for="(item) in media">
            <n-image
              v-if="item.type === 'image'"
              class="carousel-media"
              :src="item.src"
              :alt="item?.description || 'no description here blind person, sorry'"
              object-fit="contain"
            />
            <video
              v-else-if="item.type === 'video'"
              class="carousel-media"
              :src="item.src"
              :poster="item.poster"
              autoplay
              loop
              muted
              playsinline
              preload="auto"
            />
        </template>
      </n-carousel>
      <div v-if="media[selectedIndex]?.description" class="carousel-description squid-description">[{{ media[selectedIndex].description }}]</div>
      <div v-else class="carousel-description"></div>
    </n-image-group>
  </div>
</template>

<script setup lang="ts">
import { useMobileDetection } from '../composables/useMobileDetection';
import { IMedia } from '../models/media';

const selectedIndex = ref(0);
const { isMobile } = useMobileDetection();

defineProps<{ media: IMedia[] }>()
</script>

<style scoped lang="sass">
.carousel-div
  display: flex
  flex-direction: column

.carousel
  max-width: 800px
  height: 400px
  background-color: #000
  :deep(.n-carousel__arrow-group)
    position: absolute
    right: calc(50% - 34px)
  
:deep(.n-carousel__slide)
  display: flex
  justify-content: center
  align-items: center

.carousel-media
  width: 100%
  height: 100%
  display: flex
  justify-content: center

.carousel-description
  margin-top: 8px
  text-align: center
  font-size: 12px
  height: 42px

@media (max-width: 800px)
  .carousel
    height: auto !important
    // :deep(.n-carousel__dots)
    //   position: absolute
    //   bottom: 40px

  .carousel-media
    width: 100%
    height: auto !important
    max-height: 400px
  
  :deep(.carousel-media img)
      height: auto !important
      width: 100%

</style>