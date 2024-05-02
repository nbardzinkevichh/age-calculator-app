import './assets/styles/normalize.css'
import './assets/styles/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import { Temporal } from "@js-temporal/polyfill";

const app = createApp(App);
app.use(Temporal);
app.mount("#app")
