// import { ref } from "vue";

export interface Project {
  name: string;
  date: string;
  keywords: string[];
  description: string;
  status: 'Ongoing' | 'Prototype' | 'Completed';
  src: string;
  srcType: 'image' | 'video';
  routeName: string;
}

export const projectData: Project[] = [
  {
    name: 'Mood Light',
    date: '2025-09-08',
    keywords: ['Hardware', 'Software', 'Lighting', 'Web App'],
    description: 'A diffused ambient light built from repurposed materials, controlled directly from any modern web browser using the Web Bluetooth API.',
    status: 'Ongoing',
    src: 'mood-light/videos/PXL_20250911_232403363.mp4',
    srcType: 'video',
    routeName: 'mood-light',
  },
  {
    name: 'Netscore',
    date: '2024-10-01',
    keywords: ['Hardware','Software'],
    description: "A real-time, dual-sided scoreboard system that uses external Bluetooth buttons for control and score updates.",
    status: 'Ongoing',
    src: 'netscore/images/PXL_20250301_000104064.jpg',
    srcType: 'image',
    routeName: 'netscore'
  }
];

// const projects = ref([
//     {
//       name: 'FM Transmitter',
//       date: 'June 2013',
//       keywords: ['Hardware', 'Analog', 'Audio', 'RF', 'Deadbug'],
//       description: 'A simple, battery-powered monophonic FM transmitter built "deadbug-style" with discrete components, designed to broadcast audio from a device like a mp3 player to any standard FM radio receiver.',
//       srcType: 'image',
//       src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
//       routeName: 'fm-transmitter'
//     },
//     {
//       name: 'Mondays',
//       date: 'March 2020',
//       keywords: ['Software', 'Soccer', 'Web App'],
//       description: 'An app to record and analyze stats for our weekly soccer games, including goals, assists, wins, and personalized user results.',
//       srcType: 'image',
//       src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
//       routeName: 'mondays'
//     },
//     {
//       name: 'What The Fuzz!',
//       date: 'December 2015',
//       keywords: ['Hardware', 'Analog', 'Guitar', 'Pedal', 'Audio', 'Perfboard'],
//       description: 'A handmade fuzz and distortion guitar pedal built from scratch on perfboard, featuring switchable diode clipping options for a wide range of tones.',
//       srcType: 'image',
//       src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
//       routeName: 'what-the-fuzz'
//     },
//     {
//       name: 'Things',
//       date: '2024',
//       keywords: ['Software', 'Inventory', 'Web App'],
//       description: "A web app to create a personal digital inventory of items/parts in storage boxes, drawers, and cabinets, making it easy to find where things are.",
//       srcType: 'image',
//       src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
//       routeName: 'things'
//     },
//         {
//       name: 'Dumbledoor',
//       date: '2025',
//       keywords: ['Software', 'Inventory', 'Web App'],
//       description: "A not-too-invasive hardware hack that adds smart capabilities, like keyless entry, to a traditional apartment intercom system.",
//       srcType: 'image',
//       src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
//       routeName: 'dumb-le-door'
//     },
//         {
//       name: 'Mood Light',
//       date: '2025-09-08',
//       keywords: ['Hardware', 'Software', 'Lighting', 'Web App'],
//       description: "A diffused ambient light built from repurposed materials, controlled directly from any modern web browser using the Web Bluetooth API.",
//       srcType: 'video',
//       src: 'mood-light/videos/PXL_20250911_232403363.mp4',
//       routeName: 'mood-light'
//     },
//     {
//       name: 'Netscore',
//       date: 'October 2024',
//       keywords: ['Software', 'Inventory', 'Web App'],
//       description: "A real-time, dual-sided scoreboard system that uses external Bluetooth buttons for score updates, built around a ESP32-S2 and ESP32 microcontroller pair.",
//       srcType: 'image',
//       src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
//       routeName: 'netscore'
//     },
//     {
//       name: 'Goalie Rotation Timer',
//       date: '2022',
//       keywords: ['Software', 'Inventory', 'Web App'],
//       description:"A portable, ESP32-based timer with a display and buzzer, prototyped to automate goalie rotation intervals during soccer games.",
//       srcType: 'image',
//       src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
//       routeName: 'goalie-rotation-timer'
//     },
//     {
//       name: 'Comando Rita',
//       date: 'September 2025',
//       keywords: ['Hardware', 'Software', 'Lighting', 'Web App'],
//       description: "A diffused ambient light built from repurposed materials, controlled directly from any modern web browser using the Web Bluetooth API.",
//       srcType: 'video',
//       src: 'comando-rita/videos/PXL_20240819_194017048_small.mp4',
//       routeName: 'comando-rita'
//     },
//     {
//       name: 'Home OpenSCAD Models',
//       date: '2023',
//       keywords: ['Hardware', '3D Modeling', 'Urban Design'],
//       description: "A detailed 3D-printed scale model of Tokyo's famous 'Littlest Tokyo' district, showcasing intricate architecture and urban planning.",
//       srcType: 'image',
//       src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
//       routeName: 'home-openscad'
//     },
//     {
//       name: 'Plant Sniffer',
//       date: 'August 2025',
//       keywords: ['Hardware', 'Software', 'IoT', 'Web App'],
//       description: "An IoT device that monitors plant health through soil moisture and light sensors, providing real-time data via a web app.",
//       srcType: 'image',
//       src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
//       routeName: 'plant-sniffer'
//     },
//     {
//       name: 'Foosball Goal Counter',
//       date: 'July 2025',
//       keywords: ['Hardware', 'Software', 'IoT', 'Web App'],
//       description: "An automated foosball goal counter that tracks scores using sensors and displays them on a web interface for easy viewing.",
//       srcType: 'image',
//       src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
//       routeName: 'foosball-goal-counter'
//     }
//   ])

export function getProjectByRouteName(routeName: string): Project | undefined {
  return projectData.find(project => project.routeName === routeName);
}