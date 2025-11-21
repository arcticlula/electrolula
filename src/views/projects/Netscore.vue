<template>
  <ProjectTemplate id="netscore" :media="media" :models="models">
    <n-p><strong>The Story</strong></n-p>
    <n-p>
      NetScore is a scoreboard system designed to track game scores in real time using one or more Bluetooth buttons. Each button can be assigned to increase the home or away score, making it easy for players or referees to update the display wirelessly. The system runs (for now) on an ESP32-S2 and drives 3 pairs of multiplexed 7-segment displays, showing both points and sets. To ensure the score is visible from both sides of the court, the displays are mirrored on a back-to-back board.
    </n-p>
    <n-p>
      Originally, the plan was to increment the score directly on the device itself - it's mounted on the net, so anyone nearby could press a button to update it. After some feedback from friends, it became clear that external BLE buttons would be a better approach. That’s when I hit a snag: the ESP32-S2 lacks native Bluetooth. Instead of starting over, I added a separate ESP32 to act as a "Bluetooth hub." This ESP32 handles all Bluetooth input and forwards events to the ESP32-S2 controller via ESP-NOW, a proprietary peer-to-peer communication protocol. Some of the structural ideas were inherited from my earlier Goalie Rotation Timer, and I plan to merge both concepts - scoring and timed rotations, for football - in a future version.
    </n-p>
    <n-p><strong>Key Features</strong></n-p>
    <n-ul>
      <n-li>Real-time score updates via Bluetooth Classic buttons.</n-li>
      <n-li>Displays both points and sets for home and away teams.</n-li>
      <n-li>Six multiplexed 7-segment displays controlled by TLC5926 constant-current drivers.</n-li>
      <n-li>Unique dual-MCU architecture communicating via ESP-NOW.</n-li>
    </n-ul>
    <n-p><strong>Tech Stack</strong></n-p>
    <n-ul>
      <n-li><strong>Main Controller:</strong> ESP32-S2</n-li>
      <n-li><strong>Bluetooth Hub:</strong> ESP32</n-li>
      <n-li><strong>Wireless Protocols:</strong> ESP-NOW, Bluetooth Classic</n-li>
      <n-li><strong>Display Drivers:</strong> TLC5926 Constant-Current LED Drivers</n-li>
      <n-li><strong>Programming:</strong> C/C++ (ESP-IDF)</n-li>
    </n-ul>
    <n-p><strong>Challenges & Lessons Learned</strong></n-p>
    <n-p>
      The primary challenge was discovering that my chosen main controller, the ESP32-S2, did not support Bluetooth 
      after the hardware was already designed. This led to a creative workaround: implementing a two-chip solution. 
      This experience was a valuable lesson in hardware specification and adaptability, forcing me to learn and implement 
      ESP-NOW as a robust communication bridge between two microcontrollers. It demonstrated how to salvage a design 
      by augmenting it rather than starting from scratch.
    </n-p>
    <n-p><strong>Links</strong></n-p>
    <n-ul>
      <n-li><n-a href="https://github.com/arcticlula/Netscore">GitHub Repository</n-a></n-li>
      <n-li><n-a href="toDo">Onshape</n-a></n-li>
    </n-ul>
  </ProjectTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ProjectTemplate from '../../components/ProjectTemplate.vue';
import { IMedia, IObjectMedia } from '../../models/media';

const media = ref<IMedia[]>([
  {
    type: 'video',
    src: 'netscore/videos/PXL_20241107_190212057.mp4',
    poster: 'netscore/images/PXL_20241106_210348109.jpg',
  },
  {
    type: 'video',
    src: 'netscore/videos/PXL_20241117_223828664.mp4',
    poster: 'netscore/images/PXL_20241114_132224068.jpg',
  },
  {
    type: 'video',
    src: 'netscore/videos/PXL_20250205_191319538.mp4',
    poster: 'netscore/images/PXL_20250204_145030490.jpg',
  },
  {
    type: 'video',
    src: 'netscore/videos/PXL_20250227_202055451.mp4',
    poster: 'netscore/images/PXL_20250225_185539308.jpg',
  },
  {
    type: 'video',
    src: 'netscore/videos/PXL_20250301_000010858.mp4',
    poster: 'netscore/images/PXL_20250301_000104064.jpg',
  },
  {
    type: 'video',
    src: 'netscore/videos/PXL_20250304_154156214.mp4',
    poster: 'netscore/images/PXL_20250303_084218598.jpg',
  },
  {
    type: 'image',
    src: 'netscore/images/IMG-20241108-WA0001.jpeg'
  },
  {
    type: 'image',
    src: 'netscore/images/IMG-20241114-WA0000.jpeg'
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20241114_161855706.jpg'
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20241116_214312009.jpg'
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20241222_191536584.jpg'
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20241222_193515647.jpg'
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20241226_180411652.jpg'
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20250108_142946405.jpg'
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20250108_142958239.jpg'
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20250207_171005662.jpg'
  },
  {
    type: 'image',
    src: 'netscore/images/PXL_20250428_131037974.jpg'
  }
]);

  const models = ref<IObjectMedia[]>([
    {
      name: 'PCB - Display Board',
      obj: [ 
      {
        name: '1.0',
        src: 'netscore/models/pcb/display-board-v1.0.wrl',
      }, 
      {
        name: '1.2',
        src: 'netscore/models/pcb/display-board-v1.2.wrl',
      }]
    },
    {
      name: 'PCB - Main Board',
      obj: [ {
        name: '1.0',
        src: 'netscore/models/pcb/main-board-v1.0.wrl',
      }]
    },
    {
      name: 'Inner Struct',
      obj: [ {
        name: '0.1',
        src: 'netscore/models/inner/inner-struct-v0.1.stl',
        colorHex: '0xff7f00'
      },
      {
        name: '0.2',
        src: 'netscore/models/inner/inner-struct-v0.2.stl',
        colorHex: '0xff7f00'
      },
      {
        name: '0.5',
        src: 'netscore/models/inner/inner-struct-v0.5.stl',
        colorHex: '0xff7f00'
      },
      {
        name: '1.0',
        src: 'netscore/models/inner/inner-struct-v1.0.stl',
        colorHex: '0xff7f00'
      }]
    },
    {
      name: 'Union',
      obj: [ {
        name: '1.0',
        src: 'netscore/models/inner/inner-struct-union-v1.0.stl',
      }]
    },
    {
      name: 'Handle',
      obj: [ {
        name: 'v0.5',
        src: 'netscore/models/outer/outer-handle-v0.5.stl',
        colorHex: '0xff7f00'
      },
      {
        name: 'v1.0',
        src: 'netscore/models/outer/outer-handle-v1.0.stl',
        colorHex: '0xff7f00'
      }]
    },
    {
      name: 'Top',
      obj: [ {
        name: 'v0.5',
        src: 'netscore/models/outer/outer-top-v0.5.stl',
        colorHex: '0xff7f00'
      },
      {
        name: 'v0.6',
        src: 'netscore/models/outer/outer-top-v0.6.stl',
        colorHex: '0xff7f00'
      },
      {
        name: 'v1.0',
        src: 'netscore/models/outer/outer-top-v1.0.stl',
        colorHex: '0xff7f00'
      }]
    },
    {
      name: 'Button',
      obj: {
        name: 'v1.0',
        src: 'netscore/models/outer/btn-v1.0.stl',
        colorHex: '0x00ff00'
      }
    },
    {
      name: 'Middle',
      obj: {
        name: 'v0.1',
        src: 'netscore/models/outer/outer-middle-v0.1.stl',
        colorHex: '0xff7f00'
      }
    },
    {
      name: 'Bottom',
      obj: {
        name: 'v1.0',
        src: 'netscore/models/outer/outer-bottom-v1.0.stl',
        colorHex: '0xff7f00'
      }
    },
    {
      name: 'Spacer',
      obj: {
        name: 'v0.5',
        src: 'netscore/models/outer/spacer-v0.5.stl',
        colorHex: '0x00ff00'
      }
    },
    {
      name: 'Assembly - Prototype',
      isGroup: true,
      obj: [ {
        name: 'Handle',
        src: 'netscore/models/assembly/prototype/assembly-handle-v0.99.stl',
        colorHex: '0xff7f00'
      },
      {
        name: 'Top',
        src: 'netscore/models/assembly/prototype/assembly-top-v0.99.stl',
        colorHex: '0xff7f00'
      },
      {
        name: 'Button',
        src: 'netscore/models/assembly/prototype/assembly-btn-v0.99.stl',
        colorHex: '0x00ff00'
      },
      {
        name: 'Middle',
        src: 'netscore/models/assembly/prototype/assembly-middle-v0.99.stl',
        colorHex: '0xff7f00'
      },
      {
        name: 'Bottom',
        src: 'netscore/models/assembly/prototype/assembly-bottom-v0.99.stl',
        colorHex: '0xff7f00'
      }]
    },
    {
      name: 'Assembly - v1.0',
      isGroup: true,
      obj: [ {
        name: 'Handle',
        src: 'netscore/models/assembly/v1.0/assembly-handle-v1.0.stl',
        colorHex: '0xf9e1a8'
      },
      {
        name: 'Top',
        src: 'netscore/models/assembly/v1.0/assembly-top-v1.0.stl',
        colorHex: '0xffdab4'
      },
      {
        name: 'Button',
        src: 'netscore/models/assembly/v1.0/assembly-btn-v1.0.stl',
        colorHex: '0xd6e5bd'
      },
      {
        name: 'Bottom',
        src: 'netscore/models/assembly/v1.0/assembly-bottom-v1.0.stl',
        colorHex: '0xffdab4'
      },
      {
        name: 'Body - front',
        src: 'netscore/models/assembly/v1.0/assembly-inner-body-front-v1.0.stl',
        colorHex: '0xbcd8ec'
      },
      {
        name: 'Body - back',
        src: 'netscore/models/assembly/v1.0/assembly-inner-body-back-v1.0.stl',
        colorHex: '0xbcd8ec'
      },
      {
        name: 'Body - union',
        src: 'netscore/models/assembly/v1.0/assembly-inner-body-union-v1.0.stl',
        colorHex: '0xdcccec'
      },
      {
        name: 'Body - spacer',
        src: 'netscore/models/assembly/v1.0/assembly-inner-body-spacer-v1.0.stl',
        colorHex: '0xf9e1a8'
    }]
    }
  ]);
</script>

<style scoped lang="sass">

</style>
