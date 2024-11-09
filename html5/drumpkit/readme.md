# html5 代码敲击乐

## 前端是代码界的导演

## 编写静态页面（html+css）
- *先写html结构，再写样式*
- 职责分离
   - link 引入样式

- html 是演员
   - 盒子
       - div 标签
       - span 内容
   - 结构

- css 是化妆师
    ".keys" 类名选择器 (class = "keys"--->选择class名为keys的元素)
    ">" 子元素选择器 (.keys>.key{}--->选择keys类下的子元素key)
    "+" 相邻兄弟选择器 (.key+span.sound--->选择key类的相邻兄弟元素span,再选择class名为sound的元素)
    "*" 复制选择器 (.key*3--->复制3个key类的元素)
    " " 后代选择器 (.key .sound--->选择key类的后代元素.sound)

- 开发效率是第一位的
   - emmet 快捷输入
    .keys>.key>div+span.sound

- 现有个毛胚房（初步有个结构），需要装修（添加样式）

- html 标签分成两类(设计平面内盒模型的位置)
   - 块级元素 默认占据一整行 div等 从上到下
   - 行内元素 从左到右放置 做列分布

- display: flex
    启动一个弹性布局，将子元素默认横向排列

- 盒模型
    内部
   - border 边框
   - padding 内边距
   - content 内容

    外部
   - margin 外边距



- 盒子的大小由哪些决定？