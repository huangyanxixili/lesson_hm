import pkg from 'jsonwebtoken'; // 生成token的包
const { sign } = pkg;

// jwt 密钥
const secret = 'huang123';

// 每个对象模拟一个API接口
export default [
    {
        url:'/api/getUserInfo', 
        method: 'get',
        response: req => {
            return {
                msg: "hehe"
            }
        }
    },
    {
        url: '/api/login', // 接口路径
        method: 'post', // 请求方法
        timeout: 2000,
        response: (req, res) => { // 响应数据
            let body = req.body;
            // console.log(body);
            // 替代数据库的查询
            if (body.name !== 'admin' || body.password !== '123456') {
                return {
                    code: 60204,
                    message: '用户名或密码错误'
                }
            }

            // 签发令牌 token
            const token = sign({user: body.name}, secret, {
                expiresIn: 60 * 60 * 24 * 7 // 一周
            })

            return {
                code: 200,
                data: token
            }
        }
    }
]
