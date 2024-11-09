# 星球大战

- <!DOCTYPE html>
    html5  版本声明头

- <html lang="en">
    根元素  
       - 指定文档语言为英文（"en"英文，"zh-CN"简体中文）

- <meta charset="UTF-8">
    字符编码  
       - 指定文档使用的字符编码为UTF-8，这是一种广泛支持的编码方式，可以显示多种语言的字符

- <meta name="viewport" content="width=device-width, initial-scale=1.0">
    视口设置 
       - viewport即浏览器窗口可视区域
       - width=device-width 设置视口宽度等于设备宽度
       - initial-scale=1.0 初始缩放比例为1.0

- <title>Document</title>
    文档标题

- *
    css 通配符， 所有元素
    margin 0 padding 0 所有元素初始化一致
    由于有不同的浏览器厂商，默认值不同
    需要在页面样式开始之前，做一个样式的reset（重置）让任何浏览器访问，我们的页面都是一张白纸
    在所有浏览器上体验一致 

    * 性能不太好，所有我们宁愿列出所有的标签

- 居中
   - 绝对定位 position:absolute
       - 百分比相对于父元素
   - transform 变基属性
       - translate 移动
            x 左移 负 右移 正
            y 上移 负 下移 正
   - 背景大法（对位置不清楚的情况下）
       - 盒子在页面的站位会出来（将盒子的背景修改颜色） 