import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.ts'
import './assets/tailwind.css'
// import './assets/main.css'
import App from './App.vue'

const app = createApp(App)

app
    .use(createPinia()) // pinia启用
    .use(router)        // 路由启用
    .mount('#app')