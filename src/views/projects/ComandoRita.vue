<template>
  <div class="project-view">
    <n-h1>Comando R</n-h1>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MediaCarousel from '../../components/MediaCarousel.vue';
import { IMedia } from '../../models/media';

const media = ref<IMedia[]>([
  {
    type: 'video',
    src: 'comando-rita/videos/PXL_20240819_194017048_small.mp4',
  },
  {
    type: 'image',
    src: 'comando-rita/images/IMG-20240629-WA0000.jpg'
  },
  {
    type: 'image',
    src: 'comando-rita/images/PXL_20240818_221231460.jpg'
  },
  {
    type: 'image',
    src: 'comando-rita/images/PXL_20240818_221727522.MP.jpg'
  },
  {
    type: 'image',
    src: 'comando-rita/images/PXL_20240818_222616851.jpg'
  },
  {
    type: 'image',
    src: 'comando-rita/images/PXL_20240818_222911372.jpg'
  },
  {
    type: 'image',
    src: 'comando-rita/images/PXL_20240818_224644668.jpg'
  },
  {
    type: 'image',
    src: 'comando-rita/images/PXL_20240818_233012353.jpg'
  },
  {
    type: 'image',
    src: 'comando-rita/images/PXL_20240819_015024683.jpg'
  },
  {
    type: 'image',
    src: 'comando-rita/images/PXL_20240819_194327972.jpg'
  },
  {
    type: 'image',
    src: 'comando-rita/images/PXL_20240819_200435467.jpg'
  },
  {
    type: 'image',
    src: 'comando-rita/images/PXL_20240819_200443304.jpg'
  }
]);

  // const models = ref<IObjectMedia[]>([
  //   {
  //       name: 'gg',
  //       obj: [{
  //         name: '1.69',
  //         src: 'comando-rita/models/comando-bottom-v1.0.gltf',
  //         colorHex: '0xff7f00'
  //       },
  //       {
  //         name: '1.0',
  //         src: 'comando-rita/models/comando-bottom-v1.0.obj',
  //         mtl: 'comando-rita/models/comando-bottom-v1.0.mtl',
  //         colorHex: '0xff7f00'
  //       }]
  //   }
    //   name: 'Bottom',
    //   obj: [ {
    //     name: '0.01',
    //     src: 'comando-rita/models/comando-bottom-v0.01.stl',
    //     colorHex: '0xff7f00'
    //   },
    //   {
    //     name: '1.0',
    //     src: 'comando-rita/models/comando-bottom-v1.0.stl',
    //     colorHex: '0xff7f00'
    //   }]
    // },
    // {
    //   name: 'Top',
    //   obj: [ {
    //     name: '0.01',
    //     src: 'comando-rita/models/comando-top-v0.01.obj',
    //     mtl: 'comando-rita/models/comando-top-v0.01.mtl',
    //     colorHex: '0xff7f00'
    //   },
    //   {
    //     name: '1.0',
    //     src: 'comando-rita/models/comando-top-v1.0.stl',
    //     colorHex: '0xff7f00'
    //   }]
    // },
    // {
    //   name: 'Assembly',
    //   isGroup: true,
    //   obj: [ {
    //     name: 'Bottom',
    //     src: 'comando-rita/models/comando-bottom-v1.0.stl',
    //     colorHex: '0xff7f00'
    //   },
    //   {
    //     name: 'Top',
    //     src: 'comando-rita/models/comando-top-v1.0.stl',
    //     colorHex: '0xff7f00'
    //   }],
    // }
  // ]);
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

@media (max-width: 800px)
  .project-view
    padding: 0 4px !important
</style>
