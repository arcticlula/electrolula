<template>
  <div class="project-view">
    <!-- Header Section -->
    <n-h1>{{ name }}</n-h1>
    <div class="subtitle">
      <n-p class="squid-highlight">{{ formattedDate }}</n-p>
      <n-tag size="small" :type="statusType" :bordered="false">
        {{ status }}
      </n-tag>
    </div>
    
    <!-- Description/Quote -->
    <n-blockquote v-if="description">
      {{ description }}
    </n-blockquote>
    
    <!-- Media Carousel -->
    <div v-if="media && media.length > 0" class="carousel-wrapper">
      <MediaCarousel :media="media" />
    </div>
    
    <!-- Main Content Slot -->
    <slot></slot>
    
    <!-- 3D Model Viewer -->
    <template v-if="models && models.length > 0">
      <n-p>3D Model Viewer</n-p>
      <div>
        <ModelViewer
          ref="viewer"
          :models="models"
          />
          <!-- :backgroundColor="0x1a1a1a" -->
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { IMedia, IObjectMedia, ICascadeCategory } from '../models/media';
import { formatMonthYear } from '../utils/date';
import MediaCarousel from './MediaCarousel.vue';
import ModelViewer from './ModelViewer.vue';
import { getProjectByRouteName, Project } from '../data/projects';

interface Props {
  id: string;
  media?: IMedia[];
  models?: ICascadeCategory[];
}

const props = withDefaults(defineProps<Props>(), {
  media: () => [],
  models: () => [],
});

const project = computed<Project | undefined>(() => getProjectByRouteName(props.id));
const name = computed(() => project.value?.name);
const date = computed(() => project.value?.date);
const status = computed(() => project.value?.status);
const description = computed(() => project.value?.description);
const formattedDate = computed(() => formatMonthYear(date.value ?? ''));

const statusType = computed(() => {
  switch (status.value) {
    case 'Completed':
      return 'success';
    case 'Prototype':
      return 'warning';
    case 'Ongoing':
    default:
      return 'info';
  }
});
</script>

<style scoped lang="sass">
.project-view
  padding: 0 32px
  text-align: justify
  hyphens: auto
  .n-h1
    margin-bottom: 0
  .n-card
    margin-top: 24px

.subtitle
  display: flex
  align-items: center
  .n-p
    margin-top: 16px
    margin-right: 16px

.carousel-wrapper
  display: flex
  justify-content: center
  margin: 24px 0

@media (max-width: 800px)
  .project-view
    padding: 0 4px !important
  .subtitle
    justify-content: space-between
</style>