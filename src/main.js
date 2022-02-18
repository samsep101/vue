import { createApp } from 'vue'
import App from './App.vue'
import svgJs from "./plugin/vueSvgPlugin"
import Notifications from '@kyvg/vue3-notification'
import router from './router'


createApp(App).use(svgJs).use(Notifications).use(router).mount('#app');