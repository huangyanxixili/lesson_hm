import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
// vue 全家桶的最后一个 状态管理库


const app = createApp(App)
// 大型项目
// 返还了一个 pinia 的实例，vue全家桶中的仓库（Store）
const pinia = createPinia();
app
    .use(pinia)
    .mount('#app')
