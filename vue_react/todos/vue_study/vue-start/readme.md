- react 学习路径
   - react 基础语法 过一遍 （B站 | 官网）
   - hooks 相关
   - 状态管理
   - react 源码
   - Antd ...
   - ts

- AI Coding
   - vue + React 一起搞
   - 自然语义编程
        tailwindcss 语义
        antd 组件

   - 给一张设计稿 --> 生成组件 

- http（CDN 更快） 引入 前端组件库
   - vue
        Vue


- 挂载点
    将前端工作交给vue/react，在html里面只需要一个**挂载点**（#root）即可

    挂载Vue App 即：应用实例

- vue 的哲学 （让我们集中于业务的现代前端框架）
   - html 页面上升到应用的复杂，**不局限于页面，而去追求应用**（前端越来越复杂）
   - web应用是数据驱动的界面 
   - vue 事件机制 方便 ==> @ + 事件名="事件处理函数"（@event="handler"）
   - 响应式编程
       - ref(0) 包装简单数据类型，成为一个响应式对象
       - .value = "" 修改value，值改变的同时，界面也在热更新（局部更新）
       - 规避DOM 编程
       - 不再为API编程，而集中于“业务开发”

- App 和 传统编程的区别
   - createApp 创建一个应用Vue App
   - #root 结合挂载点 
   - #root Vue将接管这个元素及其内部的所有内容，并将其作为Vue实例的作用域。
        {{count}}
   - {{}} vue 的数据占位符 ,需要在#root内部才能使用
        可以改变的（动态数据）
        不需要document.querySelector("")
        {{ date }}
        setup() {
            return {
                data
            }
        }