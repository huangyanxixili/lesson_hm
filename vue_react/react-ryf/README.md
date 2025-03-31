- 为何学react？
   - UI 组件页面工程
   - react 诞生于 Facebook 来自真实的复杂业务，诸多大厂喜欢使用
   - vue 在国内社区很火（简单）  大厂 vue/react 都在使用，因为AIGC全栈项目，国际上使用 react 的更多

- 写项目？
   - 偏 AI 项目
   - vue / react 项目，nest.js AI 后端
   - 和cursor 协作项目  cursor + deepseek


--------------------闲聊--------------------------

- JSX
   - 在XML 里写JS
   - jsx 是react 的优势和特点之一，相比于 vue 提升了组件的表达能力和开发效率
        代码逻辑和template 随时互动，而不像vue 三段式 templace 和 script 分离
        vue 偏向好理解的api（v-if，v-for等）--> 后续vue3 支持了jsx
        react 的jsx 基于js，能不要api 就不要api
   - react 组件输出需要**唯一的根标签**包住所有的标签 可以作为其他节点的容器，又会在挂载后不污染html的fragment 节点实现的
        没有实体，叫 文档碎片 createDocumentFragment
        对性能有很大帮助
   - jsx 不能在原生的js 中使用 