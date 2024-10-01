import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

import VueSnap from 'vue-snap';
import 'vue-snap/dist/vue-snap.css';
import './plugins/axios';

const app = createApp(App);

app.use(VueSnap);
app.use(router);
app.use(createPinia());
app.mount('#app');












