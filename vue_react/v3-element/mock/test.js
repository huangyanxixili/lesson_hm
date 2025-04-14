import pkg from 'jsonwebtoken';
const { sign } = pkg;

// jwt 密钥
const secret = 'huang123';

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
        url: '/api/login',
        method: 'post',
        timeout: 2000,
        response: (req, res) => {
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
