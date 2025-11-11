<template>
  <div class="project-view">
    <n-h1>Mood Light</n-h1>
    <n-p><strong>September 2025</strong></n-p>
    <n-blockquote>
      A diffused ambient light built from repurposed materials, controlled directly from any modern web browser using the Web Bluetooth API.
    </n-blockquote>
    <div class="carousel-wrapper">
      <MediaCarousel :media="media" />
    </div>
    <n-p><strong>The Story</strong></n-p>
    <n-p>
      This project was born from a happy accident. I had some leftover WS2811 LED strips and a few plexiglass samples that I had mistakenly ordered for the NetScore project - 
      I thought they would be clear, but they arrived translucent. This mistake, however, turned out to be a pretty good material for a light diffuser.
      I designed a simple enclosure in Onshape, consisting of a 3D-printed frame that wraps around the plexiglass panel, with the LED strip running along the inner perimeter. 
      The result is a soft, uniform glow that fills the room - dependant on the acrylic used. 
      The light is powered by a 12V transformer and an ESP32-C3, the LEDs are controlled wirelessly via a web app using the Web Bluetooth API, 
      allowing you to connect and change colors on the fly from a browser.
    </n-p>
    <n-p><strong>Key Features</strong></n-p>
    <n-ul>
      <n-li><strong>Soft, Diffused Lighting:</strong> Uses a WS2811 LED strip paired with a translucent plexiglass panel for a smooth, ambient glow.</n-li>
      <n-li><strong>Custom Enclosure:</strong> The frame was parametrically designed in Onshape and 3D-printed.</n-li>
      <n-li><strong>Browser-Based Control:</strong> Wirelessly change colors and patterns using the Web Bluetooth API - no native app required.</n-li>
      <n-li><strong>Repurposed Components:</strong> Built from leftover materials from previous projects.</n-li>
    </n-ul>
    <n-p><strong>Tech Stack</strong></n-p>
    <n-ul>
      <n-li><strong>Hardware:</strong> ESP32-C3, WS2811 individually addressable LED strip, Translucent Plexiglass.</n-li>
      <n-li><strong>Control Protocol:</strong> Web Bluetooth API.</n-li>
      <n-li><strong>3D Design:</strong> Onshape.</n-li>
      <n-li><strong>Fabrication:</strong> 3D Printing.</n-li>
    </n-ul>
    <n-p><strong>Challenges & Lessons Learned</strong></n-p>
    <n-p>
      The primary lesson from this project was the value of creative repurposing and "happy accidents." 
      The translucent plexiglass, initially a purchasing mistake for another project, became the key component that defined the aesthetic of this one. 
      It’s a great reminder that sometimes the best designs come from adapting to unexpected materials and finding new potential in leftovers. 
      The project is also a great exploration of the power of Web Bluetooth for creating seamless hardware interactions without needing to develop a dedicated mobile application.
    </n-p>
    <n-p><strong>Links</strong></n-p>
    <n-p>

    </n-p>
    <n-p><strong>3D Model Viewer</strong></n-p>
    <div>
      <STLViewer :models="models" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MediaCarousel from '../../components/MediaCarousel.vue';
import STLViewer from '../../components/STLViewer.vue';
import { IMedia, IObjectMedia } from '../../models/media';

const media = ref<IMedia[]>([
  {
    type: 'video',
    src: new URL('../../assets/projects/mood-light/videos/PXL_20250911_232403363.mp4', import.meta.url).href,
    poster: new URL('../../assets/projects/mood-light/images/PXL_20250911_102431507.jpg', import.meta.url).href
  },
  {
    type: 'video',
    src: new URL('../../assets/projects/mood-light/videos/PXL_20250908_162742176.mp4', import.meta.url).href,
    poster: new URL('../../assets/projects/mood-light/images/PXL_20250908_162742176.jpg', import.meta.url).href
  },
  {
    type: 'image',
    src: new URL('../../assets/projects/mood-light/images/PXL_20250910_130605116.jpg', import.meta.url).href
  },
  {
    type: 'image',
    src: new URL('../../assets/projects/mood-light/images/PXL_20250911_102401092.jpg', import.meta.url).href
  },
  {
    type: 'image',
    src: new URL('../../assets/projects/mood-light/images/PXL_20250911_102415897.jpg', import.meta.url).href
  },
  {
    type: 'image',
    src: new URL('../../assets/projects/mood-light/images/PXL_20250911_102431507.jpg', import.meta.url).href
  },
  {
    type: 'image',
    src: new URL('../../assets/projects/mood-light/images/PXL_20250911_112415716.jpg', import.meta.url).href
  }
]);

  const models = ref<IObjectMedia[]>([
    {
      name: 'Holder',
      obj: {
        name: 'v0.2',
        src: new URL('../../assets/projects/mood-light/models/lamp-holder-v0.2.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      },
    },
    {
      name: 'Tab',
      obj: {
        name: 'v0.1',
        src: new URL('../../assets/projects/mood-light/models/lamp-tab-v0.1.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      },
    },
    {
      name: 'Bottom',
      obj: [ {
        name: 'v0.5',
        src: new URL('../../assets/projects/mood-light/models/lamp-bottom-v0.5.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      },
      {
        name: 'v0.9',
        src: new URL('../../assets/projects/mood-light/models/lamp-bottom-v0.9.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      },
      {
        name: 'v0.95',
        src: new URL('../../assets/projects/mood-light/models/lamp-bottom-v0.95.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      },
      {
        name: 'v0.96',
        src: new URL('../../assets/projects/mood-light/models/lamp-bottom-v0.96.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      }]
    },
    {
      name: 'Side',
      obj: [ {
        name: 'v0.5',
        src: new URL('../../assets/projects/mood-light/models/lamp-side-v0.5.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      },
      {
        name: 'v0.9',
        src: new URL('../../assets/projects/mood-light/models/lamp-side-v0.9.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      },
      {
        name: 'v0.95',
        src: new URL('../../assets/projects/mood-light/models/lamp-side-v0.95.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      },
      {
        name: 'v0.96',
        src: new URL('../../assets/projects/mood-light/models/lamp-side-v0.96.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      },      
      {
        name: 'v0.97',
        src: new URL('../../assets/projects/mood-light/models/lamp-side-v0.97.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      }]
    },

    {
      name: 'Assembly',
      isGroup: true,
      obj: [ {
        name: 'Bottom',
        src: new URL('../../assets/projects/mood-light/models/assembly/lamp-bottom-v1.0.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      },
      {
        name: 'Left',
        src: new URL('../../assets/projects/mood-light/models/assembly/lamp-left-v1.0.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      },
      {
        name: 'Right',
        src: new URL('../../assets/projects/mood-light/models/assembly/lamp-right-v1.0.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      },
      {
        name: 'Top',
        src: new URL('../../assets/projects/mood-light/models/assembly/lamp-top-v1.0.stl', import.meta.url).href,
        colorHex: '0xff7f00'
      },
      {
        name: 'Screen',
        src: new URL('../../assets/projects/mood-light/models/assembly/lamp-screen-v1.0.stl', import.meta.url).href,
        colorHex: '0xeeeeee',
        opacity: 0.9
      },
      {
        name: 'Tab',
        src: new URL('../../assets/projects/mood-light/models/assembly/lamp-tab-v1.0.stl', import.meta.url).href,
        colorHex: '0x00ff00'
      }],
    }
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
