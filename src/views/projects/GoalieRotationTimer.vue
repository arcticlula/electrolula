<template>
  <div class="project-view">
    <n-h1>Simple Monophonic FM Transmitter</n-h1>
    <n-p><strong>June 2013</strong></n-p>
    <n-blockquote>
      A simple, battery-powered monophonic FM transmitter built "deadbug-style" 
      with discrete components, designed to broadcast audio from a device like a 
      mp3 player to any standard FM radio receiver.
    </n-blockquote>
    <div class="carousel-wrapper">
      <Carousel :images="images" />
    </div>
    <n-p><strong>The Story</strong></n-p>
    <n-p>
      One of my earlier projects was this simple FM transmitter, built
      "deadbug-style" based on a popular online schematic. The frequency can be
      finely tuned with a variable capacitor, though finding the base
      frequency the first time was a challenge. The entire circuit, which runs
      off a 9V battery, is housed in a metal cigar box. Audio input is handled
      through a 6.3mm to 3.5mm jack adapter, making it easy to plug in almost
      any device. My favorite use was connecting a guitar and “playing”
      directly through a nearby radio.
    </n-p>
    <n-p><strong>Key Features</strong></n-p>
    <n-ul>
      <n-li>Broadcasts monophonic audio over the standard FM band.</n-li>
      <n-li>Fine frequency tuning via a variable capacitor.</n-li>
      <n-li>Hand-wound inductor coil.</n-li>
      <n-li>6.3mm audio input.</n-li>
      <n-li>Portable, self-contained unit powered by a 9V battery.</n-li>
    </n-ul>
    <n-p><strong>Tech Stack</strong></n-p>
    <n-ul>
      <n-li><strong>Style:</strong> Deadbug-style point-to-point soldering</n-li>
      <n-li><strong>Components:</strong> Discrete transistors, resistors, capacitors (including a variable capacitor), hand-wound inductor.</n-li>
      <n-li><strong>Power:</strong> 9V battery</n-li>
    </n-ul>
    <n-p><strong>Challenges & Lessons Learned</strong></n-p>
    <n-p>
      The biggest lesson from this project was in RF (Radio Frequency) design,
      specifically regarding enclosure materials. Housing the circuit in a
      metal cigar box created a Faraday cage effect, which significantly
      interfered with the signal strength. The transmitter only worked
      properly with the lid open, teaching me a valuable, practical lesson
      about how enclosure choices can impact antenna performance and signal
      propagation.
    </n-p>
    <n-p><strong>Links</strong></n-p>
    <n-p>
        <n-a href="https://anarchy.translocal.jp/radio/micro/howtosimplestTX.html" target="_blank">
            Original Schematic/Design 
        </n-a>
        - glad to see the original link still works!
    </n-p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const images = ref<string[]>([
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg',
    'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg',
  ]);

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

.carousel-wrapper
  display: flex
  justify-content: center
  margin: 24px 0

</style>
