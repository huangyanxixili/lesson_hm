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
- 良好的git 提交记录和习惯

- 按需加载vue 组件库element3，有利于性能优化，页面加载速度
- 路由
   - 多级路由
        二级路由 path 前面不要加 /
   - path, component, name, meta等属性
   - 路由懒加载
        最佳用户体验（快）
        按需加载页面级别组件 import函数引入方式 () => import('')
   - 路由守卫

- 表单组件（学习组件就去看文档）
    - :model 收集表单数据
    - ref 获取表单实例
         - 有时候要获取 DOM 元素，组件对象
         - 调用相应的方法
         - template 用 ref 表用DOM/组件
               const formRef = ref(null); 挂载前就为null
               挂载后就拿到了
    - 表单的校验
         - rules 校验规则
         - items prop
         - valid 方法 => boolean
- 布局组件
    - ElContainer
    - ElAside
    - ElMain    
    - ElRow
    - ElCol

- web 应用登录？
    - http 请求 + 响应的简单协议  用户状态
    - 会话？ session
    - 服务器解析请求带上的证明知道这次请求是哪个用户发起的？ 
         - 用户携带身份证明（cookie） 告知服务器我是谁？
          ```js
          {
               userID: 1,
               name: "张三",
               avatar: '-------'
          }
          ```