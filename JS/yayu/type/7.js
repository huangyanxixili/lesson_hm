console.log([1, 2, 3].map(parseInt))
// 转化成：
console.log([1, 2, 3].map((v, index, item) => {
    // v: 1, 2, 3
    // index: 0, 1, 2
    // item: [1, 2, 3]
    console.log(v, index, item);

    // 这里有一个陷阱
    // parseInt 函数接受两个参数：第二个参数表示解析时第一个参数使用的进制。
    return parseInt(v, index)
}))

// 即每次执行为:
// parseInt(1, 0)
// parseInt(2, 1)
// parseInt(3, 2)

