let a = null; // 存储在“栈内存”之中
console.log(a);

let largeObject = {
    data: new Array(100000000).fill('a') // .fill() 填充数组
} // 存储在“堆内存”之中，地址存放在“栈内存”之中

// 释放内存 垃圾回收（直接释放储存在堆内存中的内存）
largeObject = null;