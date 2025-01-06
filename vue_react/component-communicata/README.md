- vue3 响应式
   - ref 通过 .value 获取值        响应式对象 --> 只代理value  Object.defineProperty
        通过`.value`访问和修改值
        需要解包`ref`再使用 
        性能好
   - reactive                     响应式代理 --> proxy 代理对象
        直接像操作普通的 JS 对象一样访问和修改属性
        开销大

- 父子组件通信
   - props 父 -> 子（数据）
   - @child-message="handleEvent" 自定义事件名称+处理函数 attrs
   - 子组件 一切由外界传入的 都需要申明（emit 汇报）一下
        emits = defineEmits(['child-message'])
   - emits(eventName, ...args) 