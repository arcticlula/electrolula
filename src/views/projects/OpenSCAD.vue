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
              <span class="card-date">{{ project.date }}</span>
            </div>
          </template>
          <template #cover>
            <router-link :to="{ name: project.routeName }">
              <img class="card-image" :src="project.image">
            </router-link>
          </template>
          <div class="card-content">
            {{ project.description }}
          </div>
          <template #footer>
            <n-space>
              <n-tag
                v-for="keyword in project.keywords"
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

  const activeTags = ref<string[]>([]);

  const projects = ref([
    {
      name: 'FM Transmitter',
      date: 'June 2013',
      keywords: ['Hardware', 'Analog', 'Audio', 'RF', 'Deadbug'],
      description: 'A simple, battery-powered monophonic FM transmitter built "deadbug-style" with discrete components, designed to broadcast audio from a device like a mp3 player to any standard FM radio receiver.',
      image: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      routeName: 'fm-transmitter'
    },
    {
      name: 'Mondays',
      date: 'March 2020',
      keywords: ['Software', 'Soccer', 'Web App'],
      description: 'An app to record and analyze stats for our weekly soccer games, including goals, assists, wins, and personalized user results.',
      image: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      routeName: 'mondays'
    },
    {
      name: 'What The Fuzz!',
      date: 'December 2015',
      keywords: ['Hardware', 'Analog', 'Guitar', 'Pedal', 'Audio', 'Perfboard'],
      description: 'A handmade fuzz and distortion guitar pedal built from scratch on perfboard, featuring switchable diode clipping options for a wide range of tones.',
      image: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      routeName: 'what-the-fuzz'
    },
    {
      name: 'Things',
      date: '2024',
      keywords: ['Software', 'Inventory', 'Web App'],
      description: "A web app to create a personal digital inventory of items/parts in storage boxes, drawers, and cabinets, making it easy to find where things are.",
      image: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      routeName: 'things'
    },
    // {
    //   name: 'The Manager',
    //   date: 'June 2013',
    //   keywords: ['Hardware', 'Analog', 'RF', 'Deadbug'],
    //   description: 'A project management tool.',
    //   image: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
    //   routeName: 'the-manager'
    // },
    // {
    //   name: 'Help a Brother',
    //   description: 'A platform for connecting people who need help with volunteers.',
    //   image: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
    //   routeName: 'help-a-brother'
    // },
    // {
    //   name: 'This website',
    //   description: 'The website you are currently on.',
    //   image: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
    //   routeName: 'this-website'
    // }
  ])
  
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
  height: 200px
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
