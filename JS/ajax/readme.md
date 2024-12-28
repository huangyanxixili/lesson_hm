# JS 拉取数据接口

- Ajax 老牌方案，基于 XMLHttpRequest 对象
   - 请求数据接口
        ```javascript
        const xhr = new XMLHttpRequest(); // 创建 xhr 对象
        xhr.open('GET', url , false); // 配置请求方式、请求地址、是否同步
        ```
   - 发送请求
        `xhr.send();`
   - 事件监听
        ```javascript
        xhr.status === 200 && xhr.readyState === 4; // HTTP状态码为 200 且 XHR请求状态为 4 时，请求成功 
        xhr.responseText; // 响应文本
        ```
- fetch 新方案，基于 Promise 对象
    - 请求数据接口
        ```javascript
        fetch(url, {
            method: 'POST'
        })
        ```
   - 事件监听
        ```javascript
        .then res => res.json() // 解析响应文本
        .then data => {} // 处理数据
        ```