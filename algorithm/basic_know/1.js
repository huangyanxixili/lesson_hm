//代码的执行次数 T(n)
function traverse(arr){
    var len = arr.length;// 1
    for(var i = 0;i < len; i++){// 定义i为 1次 + 循环判断 (n + 1)次 + 循环体 n次
        console.log(arr[i]);// n次
    }
}
// T(n) = 1 + 1 + n + (n + 1) + n = 3n + 3 = O(n)
// 时间复杂度 O(n)

traverse();