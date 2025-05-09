import { 
    createRouter,
    createWebHistory
} from 'vue-router'

// 路由类型 
import type { RouteRecordRaw } from 'vue-router'

// js 作为弱类型语言 好入门
// 但是在大型项目里 会有很多问题

// 报错，因为类型不匹配，有隐患
// let a :number = 1;
// a = 'a';

const rootRoutes = [
    {
        path: 'home',
        name: 'Home',
        meta:{
            title: '首页',
            cache:true
        },
        component: () => import('@/views/Home/Home.vue')
    },
    {
        path: 'assistant',
        name: 'Assistant',
        meta:{
            title: 'ai助手',
            cache:true
        },
        component: () => import('@/views/Assistant/Assistant.vue')
    },
    {
        path:'shopping',
        name: 'Shopping',
        meta:{
            title: '商城',
            cache:true
        },
        component: () => import('@/views/Shop/Shopping.vue')
    },
    {
        path:'mine',
        name: 'Mine',
        meta:{
            title: '个人中心',
            cache:false
        },
        component: () => import('@/views/My/Mine.vue')
    }
]

// 类型约束可以让代码正确
const routes :RouteRecordRaw[]= [
    {
        path: '/',
        name: 'App',
        component: () => import('@/views/KeepAlive.vue'),
        redirect: '/home', // 重定向
        children: rootRoutes
    },
    {
        path:'/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next)=>{
    // as 断言 告诉ts 这个类型一定是string
    document.title = to.meta.title as string;
    next()

})

export default router