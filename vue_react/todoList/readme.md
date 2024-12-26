# vue 哲学

- 前端刀耕火种的年代（原始社会）
   - 开发思想：
        底层API DOM编程 + 事件机制 
   - 缺点：
        复杂
        性能差（频繁访问/修改 DOM）
            v8引擎（JS + 单线程） + 渲染引擎（html + css）
            以快速显示页面为第一要务
            v8引擎和渲染引擎是相互独立的，通过特定的接口进行通信。
            当v8引擎执行JS代码时，如果代码涉及到对DOM的操作，v8引擎会将这些操作发送给渲染引擎，由渲染引擎来更新页面的显示。（从v8引擎 --> 渲染引擎，犹如走高速，路程较远）

            vue（登记） 可以批量收集DOM更新，再统一更新DOM，减少了性能的消耗。


- jquery 时代（封建社会）
    js 框架，DOM 操作更简单
    $ 等封装简化了 JS 开发（对开发者友好）


- web 1.0(CSDN 博客) -> web 2.0(twitter, facebook) 
    JS 代码量增大，性能排在第一位


- 演变到需要 vue 和 react 现代前端框架的时代（当代社会）
    我们更关注于业务开发（数据，响应式，组件化），不用在意JS、DOM的底层，框架已经封装了。

    利用  数据思维 + vue/react 实现方式 = 前端开发

   - data title
   - vue 提供给专注于业务的语法 v-model => 双向绑定
       - data title 在 input.value 中显示
       - 同时 input 输入了后 data title 也会更新 

- todos 应用
   - todos 数据项
   - title 任务
   - @keydown.enter：（事件业务更快）
       - @event vue 事件监听 
       - .enter 事件修饰符（按下enter键触发）
   - : 动态绑定 即： v-bind缩写（动态样式业务）
       - :class="{}" 双引号内部是 JS 运行区域
        eg：{done: todo.done} => 对象的键是CSS类名（done），值是一个表达式（todo.done）