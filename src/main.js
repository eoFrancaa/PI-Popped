import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

const app = createApp(App)

app.use(VueSnap)
app.use(router)
app.mount('#app')
