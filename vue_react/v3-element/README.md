- 如何开发一个vue项目
   - vite 工程化 
          npm init vite + npm i + npm run dev
   - vue 核心语法（响应式、组件化开发、指令等）
          前端框架
   - vue-router 路由管理 
          npm i vue-router
   - pinia 状态管理（代替了Vuex）
          npm i pinia
   - element3 UI 组件库（类似element plus）
          npm i element-plus --save
   - stylus 样式预编译
          npm i -g stylus
          stylus --version（检测是否安装成功）
          stylus -w eg.styl -o eg.css（实时监控并转换）
   - axios 网络请求（ajax 请求封装库）
          npm i axios
   - mockjs 模拟数据
          npm i mockjs

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


- 登录流程
    1. 前端提交登录请求
        - login.vue 组件化表单
        - 调用api/login 接口
             - 项目多了一层目录 api 目录会管理应用的所有接口
             - 接口好管理，统一维护
             - 和组件解耦
        - 统一配置的axios 实例发送请求
   - 后端验证
        - mock 模拟后端 
          前后端分离的能力 前端独立完成项目开发，不需要等后端的接口
               apifox 跳过前端，直接模拟get/post 等请求
               前端 mock 跳过后端，直接模拟后端请求

- jwt 登录
   - npm i jsonwebtoken  =>  json + web + 令牌 
   - sign 签发 
   - token => verify 方法 返还用户对象（name avatar等...）

- mock 前后端通信的工作流程
   - vitejs 启用 viteMockServe 插件
   - mock 目录下的文件 申明模拟后端接口
   - api 目录下 编写了接口的封装 axios
   - 前端组件onMounted 生命周期 发起接口请求

- 需要验证用户身份的接口
   - token 在localStorage 中存储
   - 每次请求 URL 都要带上 ?token=${token} 很麻烦
   - req 是由 请求行 请求头 请求体（post get没有）
   - 请求头  Authorization: Bearer ${token} 专属头Authorization

- 怎么做登录
   - cookie + session 传统
   - jwt 更适合现在
        - 登录的本质是身份认证
        - 得到一个身份 即用户
        - 前端通过表单提交登录请求，username/password
        - jwt提供了sign 方法，签发一个token给登录请求，用户身份用secret 加密
               token 
        - token 放到 localStorage 中
        - 每个请求都要带上 token，axios 的拦截器来负责 headers 设置 Authorization 字段
        - 后端 req 解出 设置的 Authorization 字段 token
        - 调用 verify 方法 返还用户对象
             - 后端就知道身份
             - 前端也可以得到用户对象


