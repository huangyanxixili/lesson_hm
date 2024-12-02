// 递归
function fun(x,n) {
    // 递归终止条件
    if(n == 0) return 1;
    // 自顶向下
    return x * fun(x, n-1);
}

// 优化到O(log n)
function fun1(x, n) {
    if(n == 0) return 1;
    // 自顶向下
    let t = fun1(x , Math.floor(n / 2));

    if(n % 2 == 0) {
        return t * t; // n为偶数, 直接平方
    } else {
        return t * t * x;// n为奇数, 平方后再乘以x
    }
}
