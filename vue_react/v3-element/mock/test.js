import pkg from 'jsonwebtoken'; // 生成token的包
const { 
    sign,
    verify
} = pkg;

// jwt 密钥
const secret = 'huang123';

// 每个对象模拟一个API接口
export default [
    {
        url:'/api/getUserInfo', 
        method: 'get',
        response: req => {
            // 通过 http 请求头的 Authorization 字段获取 token
            const token = req.headers['authorization'].split(' ')[1];
            try {
                let decoded = verify(token, secret); // 验证token是否有效 
                // console.log(decoded);
                return {
                    code: 200,
                    data: decoded
                }
            } catch(err) {
                
            }
            return {
                user: 'admin'
                // msg: 'hehe'
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
            const token = sign({ user: body.name }, secret, {
                expiresIn: 60 * 60 * 24 * 7 // 一周
            })

            return {
                code: 200,
                data: token
            }
        }
    }
]
