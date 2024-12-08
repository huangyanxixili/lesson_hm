- 认识几个URL 
    URL的设计模式 restful api（ 理解restful api？）
    网站是用来暴露资源的 --> 如何将资源暴露出去 
   - http://localhost:3001/posts/ （列表页的链接）
   - http://localhost:3001/posts/:id id 查询参数（详情页的链接）
   - http://localhost:3001/users/:id （用户页的链接）

- 数据的查询 Read 
- 访问资源的方式
   - apifox ：web请求代理软件（资源：db.json {users posts}）
       - Get 通过 http://localhost:3001/posts/1 访问资源（浏览器默认Get访问）
       - Patch 修改资源 
       - PUT 修改资源
       - DELETE 删除资源

- HTTP 协议
   - 请求行： Method(动作 { Get查询、Patch修改、Post新增 ... }) + url(资源) 
   - 请求头： Cookie  Content-Type:text/json
   - 请求体：
- json-server 
   - 提供 http 服务
   - db.json 作为数据资源向外提供访问（支持 CRUD增删改查）

- 会设计restful api 接口
   - 需求
       - 1. 新增一篇文章  
            http://localhost:3001/posts (资源) + POST操作 + { 请求体 }
       - 2. 删除 文章2
            http://localhost:3001/posts/2 + DELETE操作

- json-server 是一个支持restful api设计的数据服务器  

- 全栈防抖
  - 前后端分离 解耦
     - 前端 live-server 5500
         fetch url 
     - 后端 json-server 3001
         url 接口服务 restful api
     - api 接口

- filter、map
  - 都是Array.prototype的方法， 所有的数组都有
  - filter 数组过滤：回调函数返回值是否为true， 则保留该元素，否则过滤掉 
  - map 数组映射：回调函数返回值为新的数组（原有数组不能满足需求）
  - forEach 迭代每一项 不需要返回

- 防抖 
  - 将要执行的函数交给一个debounce()高阶函数去优化
  - 减少执行次数 只执行连续输入的最后一次 
  - 定时器 本次关掉上一次的定时器
