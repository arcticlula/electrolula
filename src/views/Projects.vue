<template>
  <div class="home">
    <router-view></router-view>

    <div v-if="$route.name === 'projects' && activeTags.length > 0" class="filter-container">
      <n-space align="center">
        <span>Filtering by:</span>
        <n-tag
          v-for="tag in activeTags"
          :key="tag"
          type="info"
          closable
          @close="removeTagFilter(tag)"
        >
          {{ tag }}
        </n-tag>
        <n-button text type="error" @click="clearAllFilters">Clear All</n-button>
      </n-space>
    </div>
    
    <n-grid v-if="$route.name === 'projects'" cols="1 s:2 m:2 l:3" :x-gap="24" :y-gap="24" responsive="screen">
      <n-gi v-for="project in filteredProjects" :key="project.name">
        <n-card class="card" hoverable>
          <template #header>
            <div class="card-header">
              <span class="card-title">{{ project.name }}</span>
              <span class="card-date">{{  formatMonthYear(project.date) }}</span>
            </div>
          </template>
          <template #cover>
            <router-link :to="{ name: project.routeName }">
              <img v-if="project.srcType === 'image'" class="card-image" :src="project.src">
              <video
                v-else-if="project.srcType === 'video'"
                class="card-video"
                :src="project.src"
                autoplay
                loop
                muted
                playsinline
                preload="auto"
              />
            </router-link>
          </template>
          <div class="card-content">
            {{ project.description }}
          </div>
          <template #footer>
            <n-space>
              <n-tag
                v-for="keyword in project.keywords"
                size="small"
                :key="keyword"
                class="keyword-tag"
                :type="activeTags.includes(keyword) ? 'info' : 'success'"
                :bordered="false"
                @click="toggleTagFilter(keyword)"
              >
                {{ keyword }}
              </n-tag>
            </n-space>
          </template>
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';

  import { formatMonthYear } from '../utils/date';
  import { projectData, Project } from '../data/projects';

  const activeTags = ref<string[]>([]);

  const projects = ref<Project[]>(projectData);
  
  const sortedProjects = computed(() => {
    return [...projects.value].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });

  const filteredProjects = computed(() => {
    if (activeTags.value.length === 0) {
      return sortedProjects.value;
    }
    return sortedProjects.value.filter(project =>
      activeTags.value.every(tag => project.keywords.includes(tag))
    );
  });

  function toggleTagFilter(tag: string) {
    const index = activeTags.value.indexOf(tag);
    if (index === -1) {
      activeTags.value.push(tag);
    } else {
      activeTags.value.splice(index, 1);
    }
  }

  function removeTagFilter(tag: string) {
    const index = activeTags.value.indexOf(tag);
    if (index > -1) {
      activeTags.value.splice(index, 1);
    }
  }

  function clearAllFilters() {
    activeTags.value = [];
  }
</script>

<style scoped lang="sass">
a
  text-decoration: none
  color: inherit

.filter-container
  margin-bottom: 24px
  display: flex
  justify-content: center

.keyword-tag
  cursor: pointer
  transition: opacity 0.2s
  &:hover
    opacity: 0.8

.card-image
  width: 100%
  height: 300px
  object-fit: cover
  cursor: pointer

.card-video
  width: 100%
  height: 300px
  object-fit: cover
  cursor: pointer

.card-content
  text-align: justify
  hyphens: auto

.card-header
  display: flex
  flex-direction: column

.card-title
  font-weight: bold
  font-size: 1.2em

.card-date
  font-size: 0.9em
  color: #888
</style>
