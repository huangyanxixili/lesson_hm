# 总结：

## 路由router：
一句话解释： 官方的路由管理器，通过路由配置可以在单面内进行无需重加载的页面导航和视图切换。（切换URL）

- 环境搭建：
    npm i vue-router

- 重点：
   - 路由配置：
        path：路由路径
        name：路由名称
        component：路由组件
        meta：路由元信息（附加在组件上的额外数据或属性）
        children：子路由配置
   - 路由实例：
        history：路由模式
        routes：路由配置
   - 路由守卫：（可以结合jwt登录的token）
        beforeEach：全局前置守卫
        afterEach：全局后置守卫


## Pinia：
一句话解释： 官方的状态管理库，通过store可以在组件之间共享状态。（数据共享）

- 环境搭建：
    npm i pinia

- 重点：（命名前加use）
   - 创建store仓库：
        id：store的唯一标识
        setup 函数编译
        option 对象编译
   - 实例：
       调用useStore()函数获取store实例时解构会丢失响应式，需要使用toRefs()
       ```js
       // 例如：
       const counterStore = useCounterStore();
       // const { count } = counterStore(); 响应式丢失
       const { count } = toRefs(counterStore);
       ```

## element3 组件库
- 一句话总结：官方的UI组件库，提供了丰富的UI组件，方便快速开发。（UI组件）

- 环境搭建：
    npm i element-plus --save
    注意：
    1. 全局引入element3虽然很方便，但是会使文件变得很大，浏览器解析时间变长，导致页面打开变慢（可以通过按需加载解决）
    2. element3 组件 以 el- 开头，通常不会冲突
    3. element3 已经包含了 70% 的常见组件，不需要重复造组件

- 重点：
   - 只导入需要的组件，即使麻烦。

## stylus 样式预编译：
- 一句话总结：官方的样式预编译工具，提供了更便利的样式编写方式。（样式预编译）

- 环境搭建：
    npm i -g stylus
    stylus --version（检测是否安装成功）
    stylus -w eg.styl -o eg.css（实时监控并转换）

- 重点：
   - 语法学习

## axios 网络请求：
- 一句话总结：官方的网络请求库，基于 Promise 的 HTTP 客户端，用于在浏览器和 Node.js 中发送异步 HTTP 请求，简化与后端 API 的交互过程。（网络请求）

- 环境搭建：
    npm i axios

## mockjs 模拟数据：
- 一句话总结：官方的模拟数据库，可以拦截Ajax请求，让前端在没有后端接口情况下进行开发和测试。（模拟后端）

- 环境搭建：
    npm i mockjs


## token 登录：
- 一句话总结：官方的登录认证机制，通过token来验证用户身份，用于在后续请求中证明用户的身份和权限。（登录认证）

- 环境搭建：
    npm i jsonwebtoken  =>  json + web + 令牌 （jwt）

- 重点：
   - sign 签发：
        生成token
   - verify 验证：
        验证token

