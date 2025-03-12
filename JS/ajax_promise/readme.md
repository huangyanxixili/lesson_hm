- es6 promise
    Promise 类，专门解决异步耗时性问题，执行流程可控
    其他大型语言一般是同步的，而 JS 通过 es6 promise 解决了 单线程异步不好控制的问题
    promise 让异步变成同步 提供了完善解决异步任务的机制
   - 提供一个 “口袋”， 用于填装耗时性的内容  executor 立即执行
       - resolve， reject 两个函数参数
       - resolve 成功解决Promise， then执行 
       - reject 失败， catch 执行
   - then 方法 等他完成后
        resolve() 后执行回调函数， data 传给回调函数
   - catch 方法
        reject() 后执行回调函数， error 传给回调函数 

   - 三种状态
       - pending 等待，实例化后，resolve之前 或 reject之前
       - fulfilled 成功，resolve之后，需要从 pending 状态 到 fulfilled 状态
       - rejected 失败，reject之后，需要从 pending 状态 到 rejected 状态

        promise 诺言 状态只会从 pending 到 fulfilled 或 rejected 状态，并且状态一旦确定就不再改变了