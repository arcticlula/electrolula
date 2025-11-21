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
    src: 'plant-sniffer/videos/PXL_20230904_143511372.mp4',
  },

  { type: 'image', src: 'plant-sniffer/images/PXL_20230830_235156568.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230830_235208335.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230831_164257589.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230831_174424917.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230831_174438762.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230831_174952820.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230831_190110418.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230831_190326297.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230831_190332076.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230901_191630490.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230901_191642741.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230901_191710199.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230901_195810073.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230901_195818712.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230902_202053748.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230904_134746450.jpg' },
  { type: 'image', src: 'plant-sniffer/images/PXL_20230904_134752273.jpg' }
]);


// const models = ref<IObjectMedia[]>([
//   {
//     name: 'Bottom',
//     obj: [
//       {
//         name: 'v0.1',
//         src: 'plant-sniffer/models/plant-sniffer-bottom-v0.1.stl',
//         colorHex: '0xff7f00'
//       },
//       {
//         name: 'v1.0',
//         src: 'plant-sniffer/models/plant-sniffer-bottom-v1.0.stl',
//         colorHex: '0xff7f00'
//       },
//       {
//         name: 'v1.1',
//         src: 'plant-sniffer/models/plant-sniffer-bottom-v1.1.stl',
//         colorHex: '0xff7f00'
//       }
//     ]
//   },
//  {
//     name: 'Body',
//     obj:       
//     {
//       name: 'v0.1',
//       src: 'plant-sniffer/models/plant-sniffer-body-v0.1.stl',
//       colorHex: '0xff7f00'
//     },
//   },
//   {
//     name: 'Battery Holder',
//     obj: [
//       {
//         name: 'v1.0',
//         src: 'plant-sniffer/models/plant-sniffer-bt-holder-v1.stl',
//         colorHex: '0xff7f00'
//       },
//       {
//         name: 'v1.1',
//         src: 'plant-sniffer/models/plant-sniffer-bt-holder-v1.1.stl',
//         colorHex: '0xff7f00'
//       },
//       {
//         name: 'v1.2',
//         src: 'plant-sniffer/models/plant-sniffer-bt-holder-v1.2.stl',
//         colorHex: '0xff7f00'
//       },
//       {
//         name: 'v1.3',
//         src: 'plant-sniffer/models/plant-sniffer-bt-holder-v1.3.stl',
//         colorHex: '0xff7f00'
//       }
//     ]
//   },

//   {
//     name: 'Handle',
//     obj: [
//       {
//         name: 'v1.0',
//         src: 'plant-sniffer/models/plant-sniffer-handle-v1.0.stl',
//         colorHex: '0xff7f00'
//       },
//       {
//         name: 'v1.1',
//         src: 'plant-sniffer/models/plant-sniffer-handle-v1.1.stl',
//         colorHex: '0xff7f00'
//       }
//     ]
//   },

//   {
//     name: 'Top',
//     obj: [
//       {
//         name: 'v0.1',
//         src: 'plant-sniffer/models/plant-sniffer-top-v0.1.stl',
//         colorHex: '0xff7f00'
//       },
//       {
//         name: 'v0.2',
//         src: 'plant-sniffer/models/plant-sniffer-top-v0.2.stl',
//         colorHex: '0xff7f00'
//       },
//       {
//         name: 'v0.21',
//         src: 'plant-sniffer/models/plant-sniffer-top-v0.21.stl',
//         colorHex: '0xff7f00'
//       },
//       {
//         name: 'v0.3',
//         src: 'plant-sniffer/models/plant-sniffer-top-v0.3.stl',
//         colorHex: '0xff7f00'
//       },
//       {
//         name: 'v0.4',
//         src: 'plant-sniffer/models/plant-sniffer-top-v0.4.stl',
//         colorHex: '0xff7f00'
//       }
//     ]
//   }
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
