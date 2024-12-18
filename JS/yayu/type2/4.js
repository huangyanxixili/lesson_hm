var arr = [1,2,3]
// 输出数组的原始值
console.log(arr.valueOf());

var date = new Date(2024,12,18);
console.log(date.valueOf());
// JS 返回的是该日期对象所代表的时间戳（timestamp）
// 它表示自1970年1月1日00:00:00 UTC（协调世界时）以来的毫秒数。
// 这是 JS 中表示时间的一种标准方式，因为通过毫秒可以精确地表示和计算时间。

// 而当参数不好提供时，就会返回本身
console.log(({a: 1}).valueOf()); // {a: 1}
console.log([1,2,3].valueOf()); // [1,2,3]
console.log(("a").valueOf()); // a