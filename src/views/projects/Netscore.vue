<template>
  <ProjectTemplate id="netscore" :media="media" :models="models">
    <n-p class="squid-semi-title">The Story</n-p>
    <n-p>
      NetScore is a scoreboard system designed to track game scores in real time using one or more Bluetooth buttons. 
      Each button can be assigned to increase the home or away score, making it easy for players or referees to update the display wirelessly. 
      The system runs (for now) on an ESP32-S2 and drives 3 pairs of multiplexed 7-segment displays, showing both points and sets. 
      To ensure the score is visible from both sides of the court, the displays are mirrored on a back-to-back board.
    </n-p>
    <n-p>
      Originally, the plan was to increment the score directly on the device itself - it's mounted on the net, so anyone nearby could press a button to update it. 
      After some feedback from friends, it became clear that external BLE buttons would be a better approach. That’s when I hit a snag: the ESP32-S2 lacks native Bluetooth. 
      Instead of starting over, I added a separate ESP32 to act as a "Bluetooth hub." This ESP32 handles all Bluetooth input and forwards events to the ESP32-S2 controller via ESP-NOW -
      a proprietary peer-to-peer communication protocol. Some of the structural ideas were inherited from <router-link :to="{ name: 'goalie-rotation-timer' }"><n-a>Goalie Rotation Timer</n-a></router-link>, 
      and I plan to merge both concepts - scoring and timed rotations, for football - in a future version.
    </n-p>
    <n-p class="squid-semi-title">Key Features</n-p>
    <n-ul>
      <n-li>Real-time score updates via Bluetooth Classic buttons.</n-li>
      <n-li>Displays both points and sets for home and away teams.</n-li>
      <n-li>Six multiplexed 7-segment displays controlled by TLC5926 constant-current drivers.</n-li>
      <n-li>Unique dual-MCU architecture communicating via ESP-NOW.</n-li>
    </n-ul>
    <n-p class="squid-semi-title">Tech Stack</n-p>
    <n-ul>
      <n-li>Controller: <span class="squid-text-alt">ESP32-S2</span></n-li>
      <n-li>Bluetooth Hub: <span class="squid-text-alt">ESP32</span></n-li>
      <n-li>Wireless Protocols: <span class="squid-text-alt">ESP-NOW, Bluetooth Classic</span></n-li>
      <n-li>Display Drivers: <span class="squid-text-alt">TLC5926 Constant-Current LED Drivers</span></n-li>
      <n-li>Sound: <span class="squid-text-alt">Passive Buzzer</span></n-li>
      <n-li>Programming: <span class="squid-text-alt">C/C++ (ESP-IDF)</span></n-li>
    </n-ul>
    <n-p class="squid-semi-title">Challenges & Lessons Learned</n-p>
    <n-p>
      The primary challenge was discovering that my chosen main controller, the ESP32-S2, did not support Bluetooth 
      after the hardware was already designed. This led to a creative workaround: implementing a two-chip solution. 
      This experience was a valuable lesson in hardware specification and adaptability, forcing me to learn and implement 
      ESP-NOW as a robust communication bridge between two microcontrollers. It demonstrated how to salvage a design 
      by augmenting it rather than starting from scratch.
    </n-p>
    <n-p class="squid-semi-title">Links</n-p>
    <n-ul>
      <n-li><n-a href="https://github.com/arcticlula/Netscore">[GitHub Repository]</n-a></n-li>
      <n-li><n-a href="https://cad.onshape.com/documents/5af115b264f13c6d19cfb86a/w/78d0cccd4b7bd4c9cd24db7d/e/aa530ea7120c1b1ae398de3b?renderMode=0&uiState=6920aefbc94d45a0ef83195a">[Onshape]</n-a></n-li>
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
    src: 'netscore/videos/PXL_20250301_000010858.mp4',
    description: "first time testing all the boards together + ESP-32 Hub"
  },
  {
    type: 'video',
    src: 'netscore/videos/PXL_20241117_223828664.mp4',
    description: "testing the display board"
  },
  {
    type: 'video',
    src: 'netscore/videos/PXL_20250205_191319538.mp4',
    description: "showing different modes (volleyball, ping pong, and padel for now)"
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20241106_210348109.jpg',
    description: "early build to test the TLC5926 and two multiplexed segments"
  },
  {
    type: 'video',
    src: 'netscore/videos/PXL_20241107_190212057.mp4'
  },
  {
    type: 'image',
    src: 'netscore/images/IMG-20241108-WA0001.jpeg'
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20241114_132224068.jpg'
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20241114_161855706.jpg'
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20241222_193515647.jpg',
    description: "battery assembly"
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20241226_180411652.jpg',
    description: "showing display holder's heat fitted threads"
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20250108_142958239.jpg'
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20250207_171005662.jpg',
    description: "that time I couldn't program it via usb-c"
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20250428_131037974.jpg',
    description: "trying to make a build with an esp-32 before making a new revision"
  },
  {
    type: 'video',
    src: 'netscore/videos/PXL_20250304_154156214.mp4',
    description: "had to tape it down since TPU likes to peel from the plate"
  },
]);

  const models = ref<ICascadeCategory[]>([
    {
      key: 'pcb',
      label: 'PCB',
      children: [
        {
          key: 'display-board',
          label: 'Display Board',
          children: [
            { key: 'display-board-v1.0', label: '1.0', src: 'netscore/models/pcb/display-board-v1.0.wrl'},
            { key: 'display-board-v1.2', label: '1.2', src: 'netscore/models/pcb/display-board-v1.2.wrl'}
          ]
        },
        {
          key: 'main-board',
          label: 'Main Board',
          children: [
            { key: 'main-board-v1.0', label: '1.0', src: 'netscore/models/pcb/main-board-v1.0.wrl'}
          ]
        }
      ]
    },
    {
      key: 'inner',
      label: 'Inner Structure',
      children: [
        {
          key: 'inner-struct',
          label: 'Body',
          children: [
            { key: 'inner-struct-v0.1', label: '0.1', src: 'netscore/models/inner/inner-struct-v0.1.stl', colorHex: '0xff7f00'},
            { key: 'inner-struct-v0.2', label: '0.2', src: 'netscore/models/inner/inner-struct-v0.2.stl', colorHex: '0xff7f00'},
            { key: 'inner-struct-v0.5', label: '0.5', src: 'netscore/models/inner/inner-struct-v0.5.stl', colorHex: '0xff7f00'},
            { key: 'inner-struct-v1.0', label: '1.0', src: 'netscore/models/inner/inner-struct-v1.0.stl', colorHex: '0xff7f00'}
          ]
        },
        {
          key: 'inner-union',
          label: 'Union',
          children: [
            { key: 'inner-union-v1.0', label: '1.0', src: 'netscore/models/inner/inner-struct-union-v1.0.stl'}
          ]
        }
      ]
    },
    {
      key: 'outer',
      label: 'Outer Shell',
      children: [
        {
          key: 'handle',
          label: 'Handle',
          children: [
            { key: 'handle-v0.5', label: 'v0.5', src: 'netscore/models/outer/outer-handle-v0.5.stl', colorHex: '0xff7f00'},
            { key: 'handle-v1.0', label: 'v1.0', src: 'netscore/models/outer/outer-handle-v1.0.stl', colorHex: '0xff7f00'}
          ]
        },
        {
          key: 'top',
          label: 'Top',
          children: [
            { key: 'top-v0.5', label: 'v0.5', src: 'netscore/models/outer/outer-top-v0.5.stl', colorHex: '0xff7f00'},
            { key: 'top-v0.6', label: 'v0.6', src: 'netscore/models/outer/outer-top-v0.6.stl', colorHex: '0xff7f00'},
            { key: 'top-v1.0', label: 'v1.0', src: 'netscore/models/outer/outer-top-v1.0.stl', colorHex: '0xff7f00'}
          ]
        },
        {
          key: 'button',
          label: 'Button',
          children: [
            { key: 'button-v1.0', label: 'v1.0', src: 'netscore/models/outer/btn-v1.0.stl', colorHex: '0x00ff00'}
          ]
        },
        {
          key: 'middle',
          label: 'Middle',
          children: [
            { key: 'middle-v0.1', label: 'v0.1', src: 'netscore/models/outer/outer-middle-v0.1.stl', colorHex: '0xff7f00'}
          ]
        },
        {
          key: 'bottom',
          label: 'Bottom',
          children: [
            { key: 'bottom-v1.0', label: 'v1.0', src: 'netscore/models/outer/outer-bottom-v1.0.stl', colorHex: '0xff7f00'}
          ]
        },
        {
          key: 'spacer',
          label: 'Spacer',
          children: [
            { key: 'spacer-v0.5', label: 'v0.5', src: 'netscore/models/outer/spacer-v0.5.stl', colorHex: '0x00ff00'}
          ]
        }
      ]
    },
    {
      key: 'assembly',
      label: 'Assembly',
      children: [
        {
          key: 'assembly-prototype',
          label: 'Prototype',
          children: [
            {
              key: 'assembly-prototype-v0.99',
              label: 'v0.99',
              isGroup: true,
              children: [
                { key: 'proto-handle', label: 'Handle', src: 'netscore/models/assembly/prototype/assembly-handle-v0.99.stl', colorHex: '0xf9e1a8', explodeOffset: {x: 0, y: 0, z: 20}},
                { key: 'proto-top', label: 'Top', src: 'netscore/models/assembly/prototype/assembly-top-v0.99.stl', colorHex: '0xff7f00', explodeOffset: {x: 0, y: 0, z: 10}},
                { key: 'proto-button', label: 'Button', src: 'netscore/models/assembly/prototype/assembly-btn-v0.99.stl', colorHex: '0x00ff00', explodeOffset: {x: 0, y: 0, z: 15}},
                { key: 'proto-middle', label: 'Middle', src: 'netscore/models/assembly/prototype/assembly-middle-v0.99.stl', colorHex: '0xff7f00', explodeOffset: {x: 0, y: 0, z: 0}},
                { key: 'proto-bottom', label: 'Bottom', src: 'netscore/models/assembly/prototype/assembly-bottom-v0.99.stl', colorHex: '0xff7f00', explodeOffset: {x: 0, y: 0, z: -10}}
              ]
            }
          ]
        },
        {
          key: 'assembly-v1.0',
          label: 'v1.0',
          children: [
            {
              key: 'assembly-v1.0-full',
              label: 'Full Assembly',
              isGroup: true,
              children: [
                { key: 'v1.0-handle', label: 'Handle', src: 'netscore/models/assembly/v1.0/assembly-handle-v1.0.stl', colorHex: '0xf9e1a8', explodeOffset: {x: 0, y: 0, z: 20}},
                { key: 'v1.0-top', label: 'Top', src: 'netscore/models/assembly/v1.0/assembly-top-v1.0.stl', colorHex: '0xff7f00', explodeOffset: {x: 0, y: 0, z: 10}},
                { key: 'v1.0-button', label: 'Button', src: 'netscore/models/assembly/v1.0/assembly-btn-v1.0.stl', colorHex: '0xd6e5bd', explodeOffset: {x: 0, y: 0, z: 15}},
                { key: 'v1.0-bottom', label: 'Bottom', src: 'netscore/models/assembly/v1.0/assembly-bottom-v1.0.stl', colorHex: '0xff7f00', explodeOffset: {x: 0, y: 0, z: -15}},
                { key: 'v1.0-body-front', label: 'Body front', src: 'netscore/models/assembly/v1.0/assembly-inner-body-front-v1.0.stl', colorHex: '0xbcd8ec', explodeOffset: {x: 0, y: -10, z: 0}},
                { key: 'v1.0-body-back', label: 'Body back', src: 'netscore/models/assembly/v1.0/assembly-inner-body-back-v1.0.stl', colorHex: '0xbcd8ec', explodeOffset: {x: 0, y: 10, z: 0}},
                { key: 'v1.0-body-union', label: 'Body union', src: 'netscore/models/assembly/v1.0/assembly-inner-body-union-v1.0.stl', colorHex: '0xdcccec', explodeOffset: {x: 0, y: 0, z: -4}},
                { key: 'v1.0-body-spacer', label: 'Body spacer', src: 'netscore/models/assembly/v1.0/assembly-inner-body-spacer-v1.0.stl', colorHex: '0xf9e1a8', explodeOffset: {x: 0, y: 0, z: 3}}
              ]
            }
          ]
        }
      ]
    }
  ]);
</script>

<style scoped lang="sass">

</style>