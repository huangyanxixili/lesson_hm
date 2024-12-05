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