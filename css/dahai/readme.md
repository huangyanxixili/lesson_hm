# css 底层基础

- 何为css?
    css对页面的作用就是 css rules
    ```css
    /* css规则 */
    h1 { /* 选择器 */
        color: red;          /* 声明 */
        text-align: center;  /* 声明 */
    }
    ```

- css --> 层叠样式表
   - 依附于 html DOM（不能裸奔）
   - css 选择DOM 元素运用样式规则
   - css是怎么引入的？
       - style 内联样式
       - link 外联样式
       - 行内样式  eg：<p style="color:blue;"></p>

    先下载样式 再解析DOM 应用样式
    DOM + css = render tree（渲染树 --> 显示页面 所需要的 数据结构）
    --> 浏览器渲染引擎 --> 渲染得到页面  
    树上的分支就是 节点，根节点是 body

- 优先级
   - 从小到大
   - 计算规则（*10）
        标签 1，类名 10，id 100， 行内样式 1000，!important MAX
   - 当选择器比较复杂的时候 优先级加法
        .container ul li:nth-child(odd)
            一定选择最后的一个元素
        优先级：
           - 类选择器：.container (10)
           - 元素选择器：ul (1)
           - 元素选择器：li (1)
           - 伪类选择器：:nth-child(odd) (10)
            一共：22分（10+1+1+10）

- css 选择器分为哪几类？
   - 基础选择器
       - 标签选择器
       - 类选择器
       - id选择器
       - 通配符选择器 "*" （性能不好）
   - 组合选择器
       - 后代选择器 " "
       - 子元素选择器 ">"
       - 相邻兄弟选择器 "+"
       - 普通兄弟选择器 "~"
   - 伪类选择器
        ::active、::hover、::selection ..... 可交互状态
   - 伪元素选择器
        ::before、::after
   - 属性选择器