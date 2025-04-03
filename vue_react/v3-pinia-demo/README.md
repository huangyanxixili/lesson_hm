# pinia

- 组件关系 => 共享状态
   - 父组件
        持有数据状态 用 count "共享"给子组件（公平）
        修改数据状态
        兄弟组件共享正确的数据状态
       - 兄弟组件
            不能直接修改props数据

- 超越父子组件通信，但是要 "共享"
   - 将状态从组件中抽离出来 => 状态库 

- 适合小型到大型项目
   - 小型：其简单性和易用性让开发者能够快速上手
   - 大型：其扩展性和可维护性让开发者能够轻松扩展和维护项目

- 核心概念
   - store
        存储状态的容器
        可以包含多个状态
   - state
        存储状态的容器
        可以包含多个状态
   - getters
        计算属性
        可以从状态中派生出新的状态


- 安装pinia
   - npm install pinia
   - 创建实例
```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```