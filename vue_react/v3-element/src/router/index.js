import { 
    createRouter, 
    createWebHistory 
} from 'vue-router'

// 路由配置数组
const routes = [
    {
        path: '/',
        name: 'Home',
        // 路由懒加载
        component: () => import('../pages/Home.vue'),
        meta: {
            title: '首页',
            requireLogin: true
        },
        children: [
            {
                path: 'about',
                name: 'About',
                component: () => import('../pages/About.vue'),
                meta: {
                    title: '关于',
                    requireLogin: true
                }
            }
        ]
    },
    {
        path: '/login',
        component: () => import('../pages/Login.vue'),
        name: 'Login',
        meta: {
            title: '登录',
            requireLogin: false
        },
    }
]

// 创建路由实例
const router = createRouter(
    {
        history: createWebHistory(), // 路由模式
        routes: routes // 路由规则
    }
)

// 路由守卫
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '默认标题' // 设置页面标题
    // if (to.meta.requireLogin) {
    //     next('/login')
    //     return 
    // }
    next()
})

export default router