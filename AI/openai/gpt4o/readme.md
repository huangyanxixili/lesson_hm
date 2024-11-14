# 面向 OpenAI 接口编程

- 多模态 
   - 单模态
        chatgpt 文本
   - 图片、视频、音频

- npm init -y 后端
    npm i openai(安装openai)   openai sdk
        
       - npm config set registry https://registry.npmmirror.com 使用国内镜像
            设置了npm的源，npm是国外维护的，很慢，但是阿里在国内做了npm的镜像，输入后提速
        
       - 多次安装openai 浪费时间 占用内存 
            npm i -g openai(`-g` 全局安装，不建议使用)
               - 因为全局安装的包可能会影响其他项目，污染全局
            npm i -g pnpm
            哪里去了？ 命令行直接调用  **询问环境变量？**  
        
       - 既不会重复安装，也不会污染全局，符号链接去指向之前的安装
            快了，节省空间  pnpm

- main.mjs 主入口，单点入口的职责
   - mjs 支持es6 module 可以使用 import from 

- 调试能力
    console.log(result) 深 查看它的 json 结构 

- 理解参数
    gpt4o 多模态读图能力 
       - 文本指令
       - 图片地址 

- try catch 捕获异常

- key 不能提交到github
    资产的安全风险