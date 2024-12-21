# VUE + REACT  CLI 命令行

- vue-cli command line
   - 比较复杂的大型项目， 不是简单的页面开发
        web app ，而非page
   - npm init vite 
        vite  前端项目构建工具，可以快速构建前端项目（前端基建工具，工程化的核心套件）
        npm init 初始化项目 ，将初始化交给vite 
           - 得到一个 标准项目模板，包括项目结构、配置文件、依赖管理等.
               - 不需要每次手动创建项目结构和配置文件
            
           - 项目的结构
               - package.json 项目描述文件
                    dependencies 开发时期的依赖
                    **前端基建**
                   - vue 3^ 开发和上线了都要
                   - vite 开发阶段才用，上线后不需要（包工头）
            
           - 工程的不同生命周期（阶段） ==> 查看scripts
               - dev 开发阶段
               - test 测试阶段
               - build 上线阶段（进行时）
               - online 运营维护 
       - npm run dev  vite
           - 使用http协议  5173 index.html
               - 首页 website 
               - 挂载点 #app
               - src/main.js 入口文件

           - src/main.js
               - src 开发目录
                    开发的主战场
               - main.js 入口文件
                    createApp().mount('#app')
               - App.vue  
                    .vue 专属后缀
                   - 三段式
                       - 1. template 模板（负责写html结构）
                            {{}}
                       - 2. script 脚本（负责写逻辑和行为）
                            响应式
                            事件
                            ....
                       - 3. style 样式（负责写css样式） 
                   - .vue 格式太好了 
                   - 组件：
                        组件是现代前端开发的新单元 （组件是 大于 html 的 页面构建模块）
                        由一个逻辑单元的html + css + js 封装在一起（就想汉堡包一样）
                        虽然HTML仍然是构建Web页面的基础，但组件提供了一种更高级的抽象，使得开发人员可以更有效地构建复杂的UI。
                   - 现代前端拥抱组件思维 
                   - 组件按照 功能划分 
                   - 组件 = html(一堆) + css(一堆) + js(一堆)
                   - .vue 三段式组合这个组件 
                   - 轮播图 功能属性凸显 --> 经典的组件
                   - 前端的开发单位是组件， 不是页面（重复 轮播图）
                        为什么不能以html为单位？
                            单个功能弱小
                   - 从工程化角度理解组件
                       - 按功能块划分，安排好工作
                       - 组件是可以复用（.vue） import
                       - 好维护 
                   - 组件以标签的方式嵌入页面
                   - 可读性非常好 
