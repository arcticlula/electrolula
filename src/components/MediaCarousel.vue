<template>
  <n-image-group>
    <n-carousel class="carousel" :show-arrow="true">
      <template v-for="(item, index) in media" :key="index">
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
      </template>
      <template #dots="{ total, currentIndex }">
        <span class="custom-dots"> {{ currentIndex + 1 }} / {{ total }} </span>
      </template>
    </n-carousel>
  </n-image-group>
</template>

<script setup lang="ts">
import { IMedia } from '../models/media';

defineProps<{ media: IMedia[] }>()
</script>

<style scoped lang="sass">
.carousel
  width: 80%
  max-width: 800px
  height: 400px
  background-color: #000

.carousel ::v-deep .n-carousel__arrow-group
  position: absolute
  right: calc(50% - 34px)

:deep(.n-carousel__slide)
  display: flex
  justify-content: center
  align-items: center

.carousel-media
  width: 100%
  height: 100%
  object-fit: contain
  display: flex
  justify-content: center

.custom-dots 
  font-size: 12px
  transform: translateY(5px)

</style>