// 项目所有的向后端请求的接口都在这管理
import request from './request.js'


// 登录接口
// /api/login 登录接口地址 server（服务器）响应 接口需要测试是否可用
// body 是登录接口的请求体，包含用户名和密码等信息
export const login = (body) => request.post('/api/login', body).then(res => {
    console.log(res);
})
// 命名导出 => export 可以导出多个变量、函数或类等，并且每个导出都需要一个名字。导入时也需要使用相应的名字。
// 默认导出 => export default 每个模块只能有一个默认导出。默认导出不需要名字，引用时需要解包。