import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      background: 'crosshatch'
    }
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/Projects.vue"),
    meta: {
      background: 'crosshatch'
    },
    children: [
      {
        path: 'fm-transmitter',
        name: 'fm-transmitter',
        component: () => import("../views/projects/FMTransmitter.vue"),
        meta: { background: 'black' }
      },
      {
        path: 'mondays',
        name: 'mondays',
        component: () => import("../views/projects/Mondays.vue"),
        meta: { background: 'black' }
      },
      {
        path: 'wtf',
        name: 'what-the-fuzz',
        component: () => import("../views/projects/WTF.vue"),
        meta: { background: 'black' }
      },
      {
        path: 'things',
        name: 'things',
        component: () => import("../views/projects/Things.vue"),
        meta: { background: 'black' }
      },
      {
        path: 'goalie-rotation-timer',
        name: 'goalie-rotation-timer',
        component: () => import("../views/projects/GoalieRotationTimer.vue"),
        meta: { background: 'black' }
      },
      {
        path: 'dumb-le-door',
        name: 'dumb-le-door',
        component: () => import("../views/projects/DumbLeDoor.vue"),
        meta: { background: 'black' }
      },
      {
        path: 'mood-light',
        name: 'mood-light',
        component: () => import("../views/projects/MoodLight.vue"),
        meta: { background: 'black' }
      },
      {
        path: 'netscore',
        name: 'netscore',
        component: () => import("../views/projects/Netscore.vue"),
        meta: { background: 'black' }
      },
      {
        path: 'comando-rita',
        name: 'comando-rita',
        component: () => import("../views/projects/ComandoRita.vue"),
        meta: { background: 'black' }
      },
      {
        path: 'home-openscad',
        name: 'home-openscad',
        component: () => import("../views/projects/HomeOpenSCAD.vue"),
        meta: { background: 'black' }
      },
      {
        path: 'plant-sniffer',
        name: 'plant-sniffer',
        component: () => import("../views/projects/PlantSniffer.vue"),
        meta: { background: 'black' }
      },
      {
        path: 'foosball-goal-counter',
        name: 'foosball-goal-counter',
        component: () => import("../views/projects/FoosballGoalCounter.vue"),
        meta: { background: 'black' }
      },
      {
        path: 'ian',
        name: 'ian',
        component: () => import("../views/projects/Ian.vue"),
        meta: { background: 'black' }
      }
    ],
  },
  {
    path: "/cv",
    name: "cv",
    component: () => import("../views/CV.vue"),
    meta: {
      background: 'cv'
    }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    meta: {
      background: 'crosshatch'
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;