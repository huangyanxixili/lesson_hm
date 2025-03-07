# 双向绑定

- title data 
    {{title}} 数据驱动的界面
    input v-model="title"
    input 输入时，输入框的值改变了，但是数据项title 不一样
    可以用@input手动更新（麻烦），所以使用 v-model 专门解决数据双向绑定

- :class  :value ?
    动态绑定属性业务使用“:”（即v-bind:）

- 数据和界面保持一致

- all 所有任务的数量
   - title、 todos 不一样 （独立）
   - all 依赖于 todos 的计算 （寄生）
   - computed 计算属性
        形式上是一个函数，但是返回值是一个值
   - 当计算属性函数依赖项发生改变时，会重新执行函数，得到新的值
   - 关注函数体内的 数据属性 
   - 计算属性也是数据的一类
   - get set两种操作

- 数据和界面状态的正确性
   - 数据驱动界面 {{}} 单向数据绑定
   - 双向绑定 v-model
       - 先是**界面状态**发生改变
       - 数据要保持一致
       - v-model 修改数据
       - 状态一致
   - 依赖项的联动一致
        allDone -> true/false  导致 todos 也发生改变

   - 不犯错误，数据与页面保持一致  

- vue 2.0 让开发者 专注于数据业务
    data
    method
    computed
    优点：简单、易上手
    缺点：不灵活

- vue 3.0
    选项式 -> setup 组合式  对应的data + method + computed 放在一起，有利于大型项目（组件代码 > 100行）的维护