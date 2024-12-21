# react repos 项目列表

- 用户的仓库列表
   - repos 组件

- react 组件
   - vue 组件后缀是 .vue
   - react 组件后缀是.jsx 
   - compontents/ -> 挂载App.jsx
   - 相比于vue的三部分清晰明了，react 函数即组件
       - react组件要求：
           - 函数名首字母大写
           - 返回一段html JSX

   - vue 和 react 相同点/区别点
    相同点：
       - 都使用组件化思想
       - 现代前端编程框架，挂载点
       - 都有工程化配套
       - 数据绑定 {{}} {}
       - 都有响应式、数据驱动，不需要做DOM 耗性能操作
    区别点：
       - 一个是.vue；一个是.jsx
       - vue 的组件是template/script/style 三段式； react 是函数即组件
       - api风格：vue 好入门；react 难入门，但纯粹（喜欢react一般都是JS高手）
       - vue css 在组件内部，react css 单独文件
       - 组件 = 组（html + css + js）+ 完成一件功能的拆分
       - vue template, react jsx
           - jsx 是 react 最漂亮的部分，可以让我们在函数中最方便的表达UI部分
            本身是不能在浏览器上运行的，但是react会去解析jsx。（html[XML] in js）
           - 不能写class，因为 es6 里面有个class关键字，所以要改名叫className 


   - 组件类（react）
       - 封装组件 import + export default 完成功能的拆分
       - 利用 函数（构造）组件，return 一段 html（一定要有return）
       - 组件可以复用
       - 封装的是 UI + 响应式数据（能够自动更新视图的机制）
       - 全面只要写原生JS 就可以了