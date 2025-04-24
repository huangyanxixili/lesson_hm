# tailwindcss

- 不用写css
- 像 bootstrap 等 css 框架一样，提供了类名，直接用就好
- stylus 之后，css 领域里的重大突破
- 类名带有解释性，例如：text-lg    对prompt engineering 有帮助


## 安装tailwind

- css 编译器
    开发的时候使用 tailwindcss编译工具，开发完成后生成css（就像 stylus -> css）
    npm install -D postcss autoprefixer
    npm install -D tailwindcss@3.4.17 （安装版本要和官网的相同，要不然会无法执行）

- npx tailwindcss init -p 
    tailwindcss 初始化，生成 tailwind.config.js 文件，配置tailwindcss的一些参数
- tailwind.config.js 配置文件
    