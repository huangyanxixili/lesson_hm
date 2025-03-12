// 实例化时，需要传递一个函数（口袋），里面装耗时性任务
const p = new Promise((resolve, reject) => { // executor 执行器（会立马执行）
    // 同步任务
    console.log('333')
    // 异步任务 => event loop
    setTimeout(() => {
        console.log('222')
        resolve('BMW325')
        // reject()
    },1000)
})// promise 就像其意思一样：许下一个承诺，在未来的某个时间点兑现

// 将异步任务的顺序控制的话，用promise
console.log(p.__proto__, p);

p.
    then((data) => {
        // 等到 executor 异步任务执行完后，再执行 then 里面的函数
        console.log('111')
        console.log(p)
        console.log(data)
    })
    .catch(() => {
        console.log('error') 
    })
