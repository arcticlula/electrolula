<template>
  <div class="home-container">
    <div class="avatar-container">
      <n-avatar :size="120" :src="profilePic" round bordered/>
    </div>
    <div class="description-container">
      <n-h1>Welcome!</n-h1>
      <n-p>
        Hey I'm Luis, a web developer and electronics enthusiast. 
        This website is a showcase of my personal projects, from hardware 
        tinkering to full-stack web applications.
      </n-p>
      <n-p>
        Feel free to browse my <router-link to="/projects">projects</router-link> 
        or check out my <router-link to="/cv">CV</router-link>.
      </n-p>
    </div>
  </div>
</template>

<script setup lang="ts">
import profilePic from '../assets/eu.jpg'
</script>

<style scoped lang="sass">
.home-container
  display: flex
  flex-direction: row
  gap: 24px

.avatar-container
  flex: 0 0 auto 
  display: flex
  justify-content: center
  align-items: center

.description-container
  flex: 1
  display: flex
  flex-direction: column
  justify-content: center
  
  .n-h1
    margin-bottom: 16px

  .n-p
    font-size: 1.1em
    text-align: justify

  a
    text-decoration: none
    color: #58a6ff
    font-weight: bold
    transition: text-decoration 0.2s
    &:hover
      text-decoration: underline

@media (max-width: 639px)
  .home-container
    flex-direction: column
    align-items: center
</style>