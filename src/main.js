import { createApp } from 'vue'
import App from './App.vue'
import router from "@/javascript/router";
createApp(App)
    .use(router)
    .mount('#app')