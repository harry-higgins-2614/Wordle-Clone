import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import 'animate.css';

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

import Unicon from 'vue-unicons'
import { uniSetting, uniCancel, uniRedo,uniCornerDownLeft, uniBolt, uniTrophy,uniTwitter } from 'vue-unicons/dist/icons'

Unicon.add([uniSetting, uniCancel, uniRedo, uniCornerDownLeft, uniBolt, uniTrophy, uniTwitter])

app.config.devtools = true;
app.use(Unicon)
app.use(router)
app.use(createPinia())
app.mount('#app')
