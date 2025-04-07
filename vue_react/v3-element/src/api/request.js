// react vue => http 请求标配 axios
// ./ .// 相对路径进行查找
// 内置模块 node_modules/安装的第三方package
import axios from 'axios';

// 创建一个axios实例
const service = axios.create({
    baseURL: "/", // 请求的基础路径 任何请求的路径前面都会加上baseURL
    timeout: 5000 // 超时时间 服务器请求超过 5s 就报错
})

export default service;