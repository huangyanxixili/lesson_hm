- 如何开发一个vue项目
   - vite 工程化 
        npm init vite
   - vue 核心语法（响应式、组件化、指令等）
        前端框架
   - vue-router 路由
   - pinia 状态管理
   - element3 UI 组件库  
   - stylus 样式预编译
   - axios 网络请求（ajax 请求封装库）

- app.use
    通过`app.use`注册的插件可以全局使用，无需在每个组件单独导入（全局注册）
    element3 提供的组件可以全局使用
   - 注意事项
        1. 全局引入element3虽然很方便，但是会使文件变得很大，浏览器解析时间变长，导致页面打开变慢（可以通过按需加载解决）
        ```js
        // 全局引入 element3
        import { createApp } from 'vue';
        import Element3 from 'element3';
        import 'element3/lib/theme-chalk/index.css';

        const app = createApp({});
        app
            .use(Element3); // 全局注册 Element3 的所有组件
            .mount('#app');
        ```
        ```js
        // 按需加载 element3
        import { createApp } from 'vue';
        import { ElButton } from 'element3'; // 只导入需要的组件
        import 'element3/lib/theme-chalk/button.css'; // 只导入需要的样式

        const app = createApp({});

        // 按需注册组件
        app
            .component('ElButton', ElButton);
            .mount('#app');
        ```
        2. element3 组件 以 el- 开头，通常不会冲突
        3. 不要重复造轮子，其已经包含了 70% 的常见组件


## 项目亮点
- 项目全面使用es6+ 风格
    代码简介 易读 易维护
- 良好的注释 
- 按需加载vue 组件库element3，有利于性能优化，页面加载速度
- 路由
   - 多级路由
        二级路由 path 前面不要加 /
   - path, component, name, meta等属性
   - 路由懒加载
        最佳用户体验（快）
        按需加载页面级别组件 import函数引入方式 () => import('')
   - 路由守卫 