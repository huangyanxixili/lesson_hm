# BATJTMD

## 腾讯
### WEUI 前端框架 

- 先写html结构，再写样式
   - 总结构  page 盒子
   - 上下结构
       - title + desc
       - button 区域

### BEM 国际命名规范
> 简单，可复用的根据页面结构和功能区块 来命名类名的国际规范。
    .weui-cells Block

- 规范：
    - Block（块）：页面由 Block（独立的功能组件）构成。eg：header、page、button
    - Element（元素）：Block 内部的元素，不能脱离 Block 。eg：page__hd 表示头部。
       - BE 是可以嵌套的。eg：weui-cells__title 表示单元列表的标题。（Element命名包含'__'）
    - Modifier（修饰符）：Block 或 Element 的状态或外观的变化。eg：button--big 表示大按钮。 

- 页面结构的样板：大概有十几个样式
       - .page>.page__hd+.page__bd+.page__ft【.page父类 .page__hd子类与.page__bd为兄弟类】
      <div class="page">
        <div class="page__hd"></div>
        <div class="page__bd"></div>
        <div class="page__ft"></div>
      </div> 

   - weui-btn
        项目代号 + 元素

- css 源码
   - 模块化 
   - 多人协作