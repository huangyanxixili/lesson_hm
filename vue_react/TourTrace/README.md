# 字节vue前端项目学习

- vue 纯前端项目
    创建 vue + ts  vue-router pinia
    全新项目，单独 github 新建一个仓库
- vue + koa + mysql 全栈项目

- TS 就像写 java 一样让我们写 js，有更强大的类型约束

- vue-router
  - RouteRecordRaw 类型约束
  - redirect 重定向  

- vant UI 组件库
  - 和 element-ui 不太一样 包小，更快
    按需加载 .use(list) 

  - vite 工程化
    预先加载UI组件库 更快
    1. 安装 vant
    2. 安装 @vant/auto-import-resolver
    3. vite 支持
    4. Components({
      resolvers: [
        VantResolver()
      ]
    }),

- 移动端 App 
  - vant 适合移动端 element-ui 适合pc端
  - 路由 根组件App.vue -> router-view -> KeepAlive -> redirect -> 页面
  - 图表字体库 iconfont 由阿里提供（亮点）
    - 在线选择需要的图标
  - 组件 + 状态专利（pinia）

- @ 路径的别名（alias）代表/src

