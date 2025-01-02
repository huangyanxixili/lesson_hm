# Vue 3 组件生命周期
   - 组件类实例化
        template 模板的编译、css 的合成（生成渲染树）、js的执行 
        onBeforeMount
   - 组件挂载到父组件上，完成渲染
    

- v-if / v-show
    弹窗、广告、、loading...
   - 共同点：
        条件渲染（通过true/false来决定是否显示页面） 
   - 不同点：
        v-if 是**真正**的条件渲染，在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建（销毁后不会挂载在组件树上）
            显示 -> v-if false -> 销毁
            隐藏 -> v-if true -> 挂载到组件树上
        v-show 在视觉上隐藏组件，但仍然保持其状态和事件监听器，只是切换成 display:none（会一直挂载在组件树上）

       - v-if 切换卸载组件 
       - v-show 切换显示
   - 有的组件需要toggle 显示/隐藏
       - 响应式数据 showComponent
       - 页面状态

- 组件是一个类 Vue.Component LifecycleComponent ref+defineProps ... new实例化
    template + css + js 结合 -> 做好准备 -> 挂载到父组件 -> 渲染到页面