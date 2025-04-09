# react JSX

- es6 代码，放到很老的浏览器上 -> 不支持，es6代码2015年发布
    const => var
    如果非要在老浏览器上运行，就需要一种转换方法（es6 -> es5）
        babel 技术
- 那么babel能否将 JSX => 原生js执行的代码 ('npx babel demo.js -o es5.js')
- stylus => css（.styl）

- babel
   - es6+ 能够快速到来，得益于babel 工程化转义工具（将早期普及的es5 代码转义为 es6 代码）
   - 前端工程化的成熟 vite/babel/stylus/webpack 
   - vite 工程总负责， babel 是其中的代码编译的一项任务
   - 安装：
        @babel/core 核心转义逻辑 const => var 等
        @babel/cli 命令行工具 npx babel src -d lib
        @babel/preset-env 配置转义规则
            ```
                {
                    "presets": [
                        "@babel/preset-env"
                    ]
                }
            ```
           - preset 预处理 一个规则 "@babel/preset-env"
   - 配对
        npx babel demo.js -o es5.js
            npx 可以直接运行包中的命令，无需全局安装
                【场景：项目可能要在其他机器上运行，但是机器上没有安装babel，所以使用npx】
           - 当执行 npx babel ... 时：
            1.  npx 会先检查当前项目是否安装 babel 
                   - 如果本地安装了babel，npx 就会在 node_modules/.bin 目录下找到 babel 可执行文件并启动。（这里启动 babel 相当于是启动 @babel/cli）
                   - 如果没有安装babel，npx 会尝试从 npm 注册表中临时下载最新版本的 babel，并运行它。
            2. 从 npx 找到并启动 babel 后（实际上是@babel/cli），@babel/cli 就会接管后续工作，包括解析命令行参数、读取配置文件、转换代码等。 
           - @babel/core 核心的转义工作
           - .babelrc 配置文件
                presets 预处理  @babel/preset-env 配置转义规则 es6+ => es5
