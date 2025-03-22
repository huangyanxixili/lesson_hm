// http 服务启动
// 引入内置的 http 模块
// commonjs 是node早期 的模块化系统， 在 es6 模块化使用 import

// 通过 require 方法 引入模块
const http = require('http');

// 启动http服务
// http服务 是基于请求/响应的简单协议

const users = [
    {
        id: 1,
        name: '张三'
    },
    {
        id: 2,
        name: '李四'
    }
]


const server = http.createServer((req, res) => {
    // http请求处理通常是 异步 的（高并发 => 同时处理大量文件）
    // 请求来到服务器后，该函数会被执行
    // req（请求对象）接收请求后解析 -> 拿到资源 -> res（响应对象）返还响应 -> http连接结束

    // res.end('hello world')
    // res.end('var str = "hello world"')
    res.end("callback(" + JSON.stringify(users) + ")")
})

server.listen(3000, () => {
    console.log('http服务在3000端口上启动了')
})

// 使用 module.exports、export 导出