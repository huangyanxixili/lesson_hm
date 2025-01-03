// 路由配置文件
import { 
    createRouter,  // 创建路由实例
    createWebHashHistory  // 路由模式
} from 'vue-router' // 插件

// 页面级别组件放到views文件夹中
import Home from '../views/Home.vue'
import About from '../views/About.vue' // 从当前文件所在的目录向上一级，然后进入 views 目录，找到 About.vue 文件
// post 模块  post文件夹内部可能有多个组件
import PostIndex from '../views/post/index/post-index.vue'
import PostShow from '../views/post/show/post-show.vue'

// 路由配置
const routes = [
    { 
        path: '/', // 路径
        component: Home // 页面组件
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts',
        component: PostIndex
    },
    {
        path: '/posts/:postId', // 动态路由
        component: PostShow
    }
]

// 创建路由实例
const router = createRouter({ 
    history: createWebHashHistory(), // 指定路由模式为 history API 模式
    routes  // 指定路由配置数组
})

export default router