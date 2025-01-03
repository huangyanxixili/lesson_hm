import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 自动导入文件下的index.js文件
import router from './router' // 从 ./router模块中导入 router 路由对象

const app = createApp(App) // vue 根组件
    // app 对象 use 方法
    console.log(app)
// 聚焦于业务
// 通过使用.use(插件)，搭建vue的周边生态（导入插件）
app
    .use(router) // 插上路由（注册插件）
    .mount('#app') // 找到挂载点
