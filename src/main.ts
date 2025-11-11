import { createApp } from 'vue'
import './style.sass'
import App from './App.vue'
import router from './router'
import vue3dLoader from 'vue-3d-loader'

import * as THREE from 'three'
window.THREE = THREE

const app = createApp(App)

app.use(router)
app.use(vue3dLoader)

app.mount('#app')