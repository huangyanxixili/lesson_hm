function traverse(arr){
    const outLen = arr.length;// 1
    for(var i = 0; i < outLen; i++){// 1 + (n + 1) + n
        const inLen = arr[i].length;//n
        for(var j = 0; j < inLen; j++){// n + (n + 1)*n + n^2
            console.log(arr[i][j]);// n^2
        }
    }
}
// 1 + 1 + n + (n + 1) + n + n + (n + 1)*n + n^2 = 3n^2 + 5n + 3 = O(n^2)
traverse();