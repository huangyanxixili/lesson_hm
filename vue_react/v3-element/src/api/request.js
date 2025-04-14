// react vue => http 请求标配 axios
// ./ .// 相对路径进行查找
// 内置模块 node_modules/安装的第三方package
import axios from 'axios';

// 创建一个axios实例
const service = axios.create({
    baseURL: "/", // 请求的基础路径 任何请求的路径前面都会加上baseURL
    timeout: 5000 // 超时时间 服务器请求超过 5s 就报错
})

// 登录后，有许多接口需要携带token才能访问 => 通过 URL + ?token=.... 来传递token（麻烦）
// 例如: http://localhost:5173/api/getUserInfo?token=123123 
//       http://（协议） + localhost（域名）+ :5173（端口） + /api/getUserInfo（路径） + ?token=123123（查询参数）

// 请求拦截器
// fetch/xhr 在axios面前很弱
// fetch/xhr js向后端通信的功能
// axios 封装了 fetch/xhr，为了前端工程而来
service.interceptors.request.use(
    (config) => {
        // 发生在请求之前
        console.log(config,'拦截所有请求');
        // 拿到token
        let token = localStorage.getItem('token') || '';
        // 给请求头添加 Authorization 字段
        if(token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    }
)

export default service;