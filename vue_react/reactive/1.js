// es6 代理对象
const proxy = new Proxy({}, {
    // 拦截器
    get: function(target, prop) { // 访问拦截
        console.log('设置 get 操作 ')
        return target[prop]
    },
    set: function(target, prop, value) { // 设置拦截
        console.log('设置 set 操作 ')
        target[prop] = value
    }
});

proxy.time = 35;
console.log(proxy.time)