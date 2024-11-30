# AI 全栈项目

- 架构
   - frontend 前端 
   - backend 后端
        数据接口   创建 user.json 数据文件
        文件型数据
        http服务 http:localhost:3001/users
        json-server库

       - 提供数据接口
           - npm i json-server   
               - http server 响应http 请求 localhost 127.0.0.1
               - json 文件  
                    json-server          调用json-server工具的命令
                    --watch user.json    这个选项告诉json-server去监听（或者说监视）user.json文件的变化。当user.json文件发生变化时，json-server会自动重新加载数据。
                    --port 3001          这里指定了服务器监听的端口号为3001。
           - script （脚本区域）
                "dev":"json-server --watch user.json --port 3001"
           - npm run dev

   - LLM ai server