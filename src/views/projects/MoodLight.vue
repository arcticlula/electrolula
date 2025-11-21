<template>
  <ProjectTemplate id="mood-light" :media="media" :models="models">
    <n-p><strong>The Story</strong></n-p>
    <n-p>
      This project was born from a happy accident. I had some leftover WS2811 LED strips from my <router-link :to="{ name: 'ian' }"><n-a>thesis project</n-a></router-link> 
      and a few plexiglass samples that I had originally ordered for the <router-link :to="{ name: 'netscore' }"><n-a>NetScore</n-a></router-link> project - I thought they'd be clear display protectors, 
      but they turned out to be translucent. This "mistake", however, turned out to be a pretty good material for a light diffuser.
      I designed a simple enclosure in Onshape, consisting of a 3D-printed frame that wraps around the plexiglass panel, with the LED strip running along the inner perimeter. 
      The result is a soft, almost uniform glow.
      The light is powered by an ESP32-C3, and the LEDs are controlled wirelessly via a web app using the Web Bluetooth API, 
      allowing you to connect and change colors on the fly from a browser.
    </n-p>
    <n-p><strong>Key Features</strong></n-p>
    <n-ul>
      <n-li><strong>Soft, Diffused Lighting:</strong> Uses a WS2811 LED strip paired with a translucent plexiglass panel for a smooth, ambient glow.</n-li>
      <n-li><strong>Custom Enclosure:</strong> The frame was parametrically designed in Onshape.</n-li>
      <n-li><strong>Browser-Based Control:</strong> Wirelessly change colors and patterns using the Web Bluetooth API—no native app required.</n-li>
      <n-li><strong>Repurposed Components:</strong> Built from leftover materials from previous projects.</n-li>
    </n-ul>
    <n-p><strong>Tech Stack</strong></n-p>
    <n-ul>
      <n-li><strong>Hardware:</strong> ESP32-C3, WS2811 individually addressable LED strip.</n-li>
      <n-li><strong>Software:</strong></n-li>
      <n-ul>
        <n-li> Custom firmware written in C/C++ using the Arduino framework.</n-li>
        <n-li> As for the web app it was built with Vue.js and TypeScript.</n-li> 
      </n-ul>
      <n-li><strong>Control Protocol:</strong> BLE / Web Bluetooth API.</n-li>
      <n-li><strong>3D Design:</strong> Onshape.</n-li>
      <n-li><strong>Circuit Board Technique:</strong> Perfboard for now.</n-li>
    </n-ul>
    <n-p><strong>Challenges & Lessons Learned</strong></n-p>
    <n-p>
      The primary lesson from this project was the value of creative repurposing and "happy accidents." 
      The translucent plexiglass, initially a purchasing mistake for another project, became the key component that defined the aesthetic and also the driving force in this project's creation. 
      It's a good reminder that sometimes the best ideas come from adapting to unexpected materials and finding potential in leftovers.
    </n-p>
    <n-p><strong>Links</strong></n-p>
    <n-ul>
      <n-li><n-a href="toDo">GitHub Repository</n-a></n-li>
      <n-li><n-a href="toDo">Web App</n-a></n-li>
      <n-li><n-a href="https://cad.onshape.com/documents/ffe826fd84c7b0b803a26dcf/w/2289f860d06ea32193ad4090/e/bda82098034db4c28fba08ea?renderMode=0&uiState=691cc052b1846ac8b07025d5">Onshape</n-a></n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia, ICascadeCategory } from '../../models/media';

const media = ref<IMedia[]>([
  {
    type: 'video',
    src: 'mood-light/videos/PXL_20250911_232403363.mp4',
    poster: 'mood-light/images/PXL_20250911_102431507.jpg',
  },
  {
    type: 'video',
    src: 'mood-light/videos/PXL_20250908_162742176.mp4',
    poster: 'mood-light/images/PXL_20250908_162742176.jpg',
  },
  {
    type: 'image',
    src: 'mood-light/images/PXL_20250910_130605116.jpg'
  },
  {
    type: 'image',
    src: 'mood-light/images/PXL_20250911_102415897.jpg'
  },
  {
    type: 'image',
    src: 'mood-light/images/PXL_20250911_102431507.jpg'
  },
  {
    type: 'image',
    src: 'mood-light/images/PXL_20250911_112415716.jpg'
  }
]);

const models = ref<ICascadeCategory[]>([{
  key: 'parts',
  label: 'Parts',
  children: [
    {
      key: 'bottom',
      label: 'Bottom',
      children: [
        { key: 'bottom-v0.2', label: '0.2', src: 'mood-light/models/lamp-holder-v0.2.stl', colorHex: '0xff7f00' },
        { key: 'bottom-v0.5', label: '0.5', src: 'mood-light/models/lamp-bottom-v0.5.stl', colorHex: '0xff7f00' },
        { key: 'bottom-v0.9', label: '0.9', src: 'mood-light/models/lamp-bottom-v0.9.stl', colorHex: '0xff7f00' },
        { key: 'bottom-v0.95', label: '0.95', src: 'mood-light/models/lamp-bottom-v0.95.stl', colorHex: '0xff7f00' },
        { key: 'bottom-v0.96', label: '0.96', src: 'mood-light/models/lamp-bottom-v0.96.stl', colorHex: '0xff7f00' }
      ]
    },
    {
      key: 'side',
      label: 'Side',
      children: [
        { key: 'side-v0.5', label: '0.5', src: 'mood-light/models/lamp-side-v0.5.stl', colorHex: '0xff7f00' },
        { key: 'side-v0.9', label: '0.9', src: 'mood-light/models/lamp-side-v0.9.stl', colorHex: '0xff7f00' },
        { key: 'side-v0.95', label: '0.95', src: 'mood-light/models/lamp-side-v0.95.stl', colorHex: '0xff7f00' },
        { key: 'side-v0.96', label: '0.96', src: 'mood-light/models/lamp-side-v0.96.stl', colorHex: '0xff7f00' },
        { key: 'side-v0.97', label: '0.97', src: 'mood-light/models/lamp-side-v0.97.stl', colorHex: '0xff7f00' }
      ]
    },
    {
      key: 'tab',
      label: 'Tab',
      children: [
        { key: 'tab-v0.1', label: '0.1', src: 'mood-light/models/lamp-tab-v0.1.stl', colorHex: '0xff7f00' }
      ]
    }
  ]}, 
{
  key: 'assembly',
  label: 'Assembly',
  children: [
    {
      key: 'assembly-v1.0',
      label: 'V1.0',
      children: [
        {
          key: 'assembly-v1.0-models',
          label: 'v1.0',
          isGroup: true,
          children: [
            { key: 'assembly-bottom', label: 'Bottom', src: 'mood-light/models/assembly/lamp-bottom-v1.0.stl', colorHex: '0xff7f00' },
            { key: 'assembly-left', label: 'Left', src: 'mood-light/models/assembly/lamp-left-v1.0.stl', colorHex: '0xff7f00' },
            { key: 'assembly-right', label: 'Right', src: 'mood-light/models/assembly/lamp-right-v1.0.stl', colorHex: '0xff7f00' },
            { key: 'assembly-top', label: 'Top', src: 'mood-light/models/assembly/lamp-top-v1.0.stl', colorHex: '0xff7f00' },
            { key: 'assembly-screen', label: 'Screen', src: 'mood-light/models/assembly/lamp-screen-v1.0.stl', colorHex: '0xeeeeee', opacity: 0.9 },
            { key: 'assembly-tab', label: 'Tab', src: 'mood-light/models/assembly/lamp-tab-v1.0.stl', colorHex: '0x00ff00' }
          ]
        }
      ]
    }
  ]
}]);
</script>

<style scoped lang="sass">

</style>
