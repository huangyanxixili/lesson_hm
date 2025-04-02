# 跨域

- 运行环境
   - 前端
          浏览器通过 v8引擎 执行js代码
   - 后端 
          node.js 封装了v8引擎 从而在后端运行js代码，并且剥离了html，专注于网络应用后端。也可借助c++ 调用操作系统服务
          node自带 `http`模块，提供了创建HTTP服务器和客户端的功能。（轻松响应http请求）

   - 为什么node 有模块化需求？
         - 引入各种模块
         - 后端功能复杂
         - mvc 
               model 连接数据库
               view 页面
               controller 控制 （参数校验、逻辑等）
    - require -> es6 module 


    - 为什么要学node？
         - 后端开发
         - 大前端，前端后端都要学，做更多事情
         - 简单，性能好

- CORS policy
    - 安全策略，通过控制浏览器如何处理来自**不同源**（即：不同协议、端口、域名）的资源请求，来防止跨域攻击和数据泄露。
    - 例如： 百度 -->发送fetch向--> google 请求 （不受信任） 不同域名
    - http://127.0.0.1:5500/（前端） js script 所在域名
    - http://localhost:3000/（后端） 即使将 localhost 改为 127.0.0.1 仍然被block（堵塞）
          即使`localhost`和`127.0.0.1`都是指本地计算机，但是在浏览器的安全模型中被视为不同的源。
          所以浏览器会认为这是一个跨域请求，并且根据CORS策略进行处理。
         - 这是为了保护什么？
              - 后端 制定规则 
                    后端可以通过设置HTTP响应头来定义哪些来源可以访问其资源。例如，通过设置Access-Control-Allow-Origin头部，服务器可以指定允许的所有源。如果没有适当的CORS配置，理论上任何网站都可以尝试访问你的API，这可能导致数据泄露或其他安全问题。
                    目前没有block
              - 前端 
                    现代浏览器内置了严格的同源策略，这意味着JavaScript代码只能访问与之同源（相同协议、域名和端口）的资源。对于跨域请求，必须有服务器的明确许可（通过正确的CORS响应头）。此外，JavaScript也不能随意修改跨域iframe中的DOM内容，这也是为了防止跨站脚本攻击（XSS）等安全威胁。
                    JS 限制跨域请求（CORS） 
                    JS DOM 修改页面的 跨域内容受到限制

- Cross-Origin Resource Sharing（跨源资源共享）
     源（Origin） > 域名（Domain） + 端口（Port） + 协议（Protocol）=> 共同定义了一个源
     如果俩个URL其中任何一个不同，则被认为是跨域请求，并受到CORS（跨源资源共享）政策的管理。

    - Protocol：用于访问资源的通信协议
          例如：`http://` 和 `https://`
    - Domain：域名是由一系列的子域名组成的，用于标识网站或服务器的位置
          例如：`www.example.com` 和 `api.example.com`，即使域名相同，但是子域名不同也视为不同源
    - Port：端口是用于区分不同应用程序或服务的数字标识符
          例如：`http://example.com:8080` 和 `http://example.com` （8080 vs 默认80）

## 前后端分离
- vue 开发前端
- node/java 开发后端
- 开发日常 跨域是家常便饭

- 换个方法
    - 使用fetch发送请求会触发CORS policy
    - script + src
          不受CORS限制
    - 通过 http 请求  将后端API接口资源拿到
          传递 src = api 的 url
    - json 数据 

- script 阻塞式加载并执行
- jsonp
     json with padding（函数）
    - 前端需要script 标签 src 执行api url
    - 页面上埋一个全局方法 window.callback
    - 需要后端的配合 数据外包一个函数
- 封装一个 jsonp 函数
    - url + callback
    - dom script 挂载 和 window[callback] = callback 

