import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();
// console.log(process.env.OPENAI_API_KEY,"////");

// 实例化openai 客户端
const client = new OpenAI({// 用于配置 OpenAI API 客户端的实例化参数。
    //访问openai的API密钥
    apiKey: process.env.OPENAI_API_KEY,
    //OpenAI API 的基本 URL。它指定了 API 请求应该发送到的服务器地址，即转发
    baseURL: "https://api.302.ai/v1"
})

// 良好的编程风格

// 主函数 执行的入口，单点入口

// 函数申明
// function main(){
//     console.log("ai 全栈开始了")
// } 传统函数

// es6 箭头函数，比传统函数更简洁，它没有自己的 this、arguments、super 或 new.target 绑定。
// 赋值语句
// 函数也是对象
// 函数表达式
// 在编译阶段进行了 const main 的申明，在执行阶段对 main 赋值为一个函数，相当于赋值 main = () => {}

const main = async () => { // es7功能 async 函数修饰符 + await  一对（await 只能在 async 函数中使用）  异步函数
    // openai 的调用是异步的
    // await 等待 ---> await 会阻塞当前 async 函数的执行，直到等待的问题被解决或拒绝
    // chat 聊天的方式调用
    // completions 完成问答的方式调用
    // create 创建
    try{
        const response = await client.chat.completions.create({// 创建一个openai的创建一个通过聊天完成请求的方法
        model: "gpt-4o",
        // 对话列表（聊天内容）
        messages:[
            {
                role: "user", // 角色
                content:[ // 内容
                    {
                        type: "text",
                        "text": "请描述一下图片的内容"
                    },
                    {
                        type: "image_url",
                        "image_url": {
                            "url": "https://img.huxiucdn.com/img/minitopic/202406/25/084826659075.jpg?imageView2/1/w/512/h/512/|imageMogr2/strip/interlace/1/quality/85"
                        }
                    }
                ]
            }
        ],
        max_tokens:300
        })
        console.log(response.choices[0].message.content)
    }
    catch(err){
        console.log(err)
    }
}

main()