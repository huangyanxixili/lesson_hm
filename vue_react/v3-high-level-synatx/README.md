- vue3 高级语法

- watch & watchEffect
   - 监听数据变化，执行相关的操作 
   - 参数不同
        watch 
            第一个参数 是一个响应式数据源，也可以是一个数组（多个数据源）
            第二个参数 是一个回调函数，可以拿到新旧值
            第三个参数 接收一个选项 immediate 创建监听器的时候就先执行一次回调函数 默认是false
            deep 深度监听 
        watchEffect 会自动执行一次，默认deep
           - effect 副作用：相关的响应式对象发生改变后，会自动执行的副作用
        v-model.number 双向绑定类型 特别适合表单

- slot 插槽
   - 插在组件的开和关之间
      组件的开关之间可以添加插槽
   - 作用：提升组件的定制性
      props  ref/reactive 
      组件一部分的UI 由父组件决定
      父组件通过组件开关之间来传递