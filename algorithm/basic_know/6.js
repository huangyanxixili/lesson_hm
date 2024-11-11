const len = arr.length;

//此循环 遍历（推荐）
for(let i = 0; i < len; i++){
    console.log(arr[i],i);
}

//调用了函数，导致空间复杂度变大  遍历
arr.forEach(function(item,index) {
    console.log(item,index);
});
