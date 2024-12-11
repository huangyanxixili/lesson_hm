# h5 页面开发

- 标注好了的设计稿
- 交付的 html + css + js 
- **先写 html 结构，再写 css 样式**
- 文档流，盒模型，layout 布局（两列）
- 适配（在所有设备上得到无差别访问）
    在移动端少用或不用 绝对大小（px等...）
    多用 相对单位（rem等...）-> 等比例缩放


- rem（相对单位）
    相对于html 的font-size（字体大小） 进行相对计算

- 750px （页面设计稿尺寸）
    1rem = 750px / 10 = 75px --> html font-size = 75px （方便进行等比例缩放）
- 828px 
    1rem = 828px / 10 = 82.8px --> html font-size = 82.8px
