## 层叠上下文 

# 页面渲染规则

- 文档流
    body 开始从上到下，从左到右

- 布局 Layout

- 盒模型计算方式（box-sizing）
    box-sizing border+padding+content
    盒模型 标准盒模型 content-box (设置的`width`和`height`仅应用于`content`) 
    IE盒模型 border-box (设置的`width`和`height`包含`content`+`padding`+`border`)

- 认标签，但也可用display转变
    块级元素 block（div等）
    行内元素 inline（span等）不能设置宽高，宽高由内容决定，不能用于做盒子 
    块级元素为何默认占据父容器的整个宽度（100%）？
       - 块级元素的设计目的是为了构建页面的主要结构
       - 大多数块级元素的默认样式是由用户代理样式表（即浏览器内置的默认样式）定义的
    html 是第一个BFC 元素，body 参与html的BFC
        页面显示由html负责 页面的布局 块级元素从上到下，行内元素从左到右

- display 

- BFC Block Formatting Context 块级格式化上下文
   - html 是根元素，也是最顶级的BFC
   - context 块级元素从上到下，行内元素从左到右

- 格式上下文？ Formatting Context 
   - 为何弹性布局 打破了html BFC的规则？
       - BFC 不是某个元素的特例，弹性布局创立了一个新的BFC
       - BFC 不受外界影响，全新的独立渲染区域 FFC（Flex Formating Context）
            flex-direction:row|column 
   - GFC（）网络布局 

# BFC 
   - html 是最顶级的BFC
   - block level box 垂直方向，一个接一个的放置，且宽度100%
   - 盒子垂直方向的距离由margin决定，同一个BFC 的相邻盒子的margin会发生重叠，大的说了算
   - 每个元素的margin 左边，与包含块border的左边相接触，即使存在浮动也是如此
   - 独立渲染区域，不受外界影响
   - 计算BFC高度时，浮动元素也参与计算


   - 触发新BFC
       - overflow:hidden|auto... 不为visible（就像水杯盛开水）


- 页面是平面的
    BFC 、文档流 、布局 、盒模型、 选择器、 继承.... 为渲染引擎像素（rgb 像素点）计算而服务的
   - z-index 越大越在上面
   - 一层一层计算 最后叠加起来（图层的合成）
   - 层叠上下文是HTML 的三维概念，发生堆叠。 z-index 受父元素的影响，如果父元素小的话，z-index 就没有效果了
       - 设计原因：
           - html DOM树 浏览器解析程序的数据结构（树）
           - css cssOM树
           - DOM树 + cssOM树 = render树（渲染树）-> 布局layout（float，position，flex等） -> 绘制paint(z-index) -> 合成composite(图层) -> 渲染引擎挂载到像素点上。
           - z-index 太多了，性能不好
               - 解决方案： 父图层 管理 子图层。  

- css 有三种写法
    - 行内样式
        样式优先级最高(行内样式、!important 少写，不好维护)  
        :style={width: width+'px'} 动态样式还是需要用行内样式
    - 内部样式(内嵌样式)
        少用，不方便复用和管理
        影响页面加载速度
    - 外部样式
        好维护
        好复用
        模块化
        并发请求，DOM 可以提前解析和CSS 结合，渲染，页面尽早出来（快）

- stylus 
    CSS 预编译器
    浏览器还是只认css ，先写styl文件，再通过命令编译成css文件
   - npm i -g stylus 全局安装了 stylus
   - stylus -w .styl -o .css
   - 快 不用写{} 不用写:;
   - 用tab 缩进一下 选择器和规则的归属
   - stylus 让css 更强大