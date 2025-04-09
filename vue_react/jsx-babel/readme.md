# react JSX

- es6 代码，放到很老的浏览器上 -> 不支持，es6代码2015年发布
    const => var
    如果非要在老浏览器上运行，就需要一种转换方法（es6 -> es5）
        babel 技术
- 那么babel能否将 JSX => 原生js执行的代码 ('npx babel demo.js -o es5.js')
- stylus => css（.styl）

- babel
   - 让任何js 的新特性，立刻投入代码生产
        可以立刻投入 当下需要的环境
        例如：async await 是es8的，但是老浏览器不支持，而通过babel可以转义当前环境支持的语法
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
                加了一个 @babel/preset-react 就支持 jsx => js

- 深入理解 jsx
   - 并不是js的新特性
   - 而是 react UI 组件语法，react 组件编写更简单，可读性更好
        可以在 js 里，写html 
   - jsx 不可以直接运行，由babel 按 @babel/preset-react 规则转义为 原生js
   - React.createElement(tag, props, children) 
        生成虚拟DOM

- jsx 的理解
   - 原生dom 性能差，直接用会有问题
   - vue/react 会封装 dom 操作，性能好，VDOM
        React.createElement
        聚焦于业务，而非Dom 操作
   - babel，设计jsx UI 组件语法 在 js 里面写 html
        babel 会转义 jsx 语法为 React.createElement 
   - html UI 开发 简单
   - 直接进入到react 函数式组件中
