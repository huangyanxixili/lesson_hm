# vue 全家桶之 vue-router 路由

- vue 语法 --> 组件（vue2的选项式API / vue3的组合式API 用于大型项目--> 200+行代码）、响应式、生命周期、指令（v-bind:、v-model、v-for、v-if、v-show）、三种数据（自由数据ref、props、computed）
    只做最核心的

- vue-router 路由 vue 周边生态
   - 路由的使用场景
        1. 实现页面的跳转（URL的切换）
        2. 实现页面的切换（组件的切换）

- vuex / pinia 状态管理

## vue-router
- 将接管路由，像交警一样
- `<router-link>` 取代 `<a>` 标签
    router-link 组件包含 a 的功能，而且当切换路由时，将路由对应的组件切换到相应的位置
- 组件还没有生效，无法识别组件 -> 其就会降级为`<div>`标签
   - 要启用 router-link 组件
        1. 在 main.js 中引入 router 组件

- router 有专门的目录
   - index.js 入口配置文件
   - router-link 是 vue-router 提供的组件，只用.use(router)不用引入就可以生效

- 业务熟练度
   - vue-router 语法细节
       - routes 将复杂应用模块拆分（亮点）
        ```js
        [
            /
            /About    // 顶级路径
            ...users  // 用户模块
            ...posts  // 文章模块（展开运算符）
        ]
        ```
       - path路径, component组件
           - name  给路由起名字
           - props 给路由的组件传参
        
- 路由历史记录 history
    router-link 而不是a 组件
    router.push() 入栈
    栈顶是当前的路由，显示组件
    可以前进，后退页面
    导航 = url + history navigator

- 实战开发
   - stylus
        加速css开发
        npm i -D stylus 当前项目安装stylus包
        省略{}、:、;，用 tab 缩进