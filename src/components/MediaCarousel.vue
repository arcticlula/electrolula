<template>
  <n-image-group>
    <n-carousel class="carousel" :show-arrow="!isMobile" :show-dots="isMobile" dot-type="line">
      <template v-for="(item, index) in media" :key="index">
        <div class="carousel-div">
          <n-image
            v-if="item.type === 'image'"
            class="carousel-media"
            :src="item.src"
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
          <div class="carousel-description squid-description" v-if="item.description">[{{ item.description }}]</div>
        </div>
      </template>
    </n-carousel>
  </n-image-group>
</template>

<script setup lang="ts">
import { useMobileDetection } from '../composables/useMobileDetection';
import { IMedia } from '../models/media';

const { isMobile } = useMobileDetection();

defineProps<{ media: IMedia[] }>()
</script>

<style scoped lang="sass">
.carousel
  max-width: 800px
  height: 400px
  background-color: #000
  :deep(.n-carousel__arrow-group)
    position: absolute
    right: calc(50% - 34px)
    bottom: 45px

.carousel-div
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  
:deep(.n-carousel__slide)
  display: flex
  justify-content: center
  align-items: center

.carousel-media
  width: 100%
  height: calc(100% - 32px)
  display: flex
  justify-content: center

.carousel-description
  height: 100%
  margin-top: 8px
  text-align: center
  font-size: 12px

.custom-dots 
  font-size: 12px
  transform: translateY(5px)

@media (max-width: 800px)
  .carousel
    height: auto !important

  .carousel-div
    height: auto !important

  .carousel-media
    width: 100%
    height: auto !important
    max-height: 400px
  
  :deep(.carousel-media img)
      height: auto !important
      width: 100%

</style>