import App from './App.vue'
import router from './router/router.js'
import { createApp } from 'vue'
import './style.css'

createApp(App).use(router).mount('#app')