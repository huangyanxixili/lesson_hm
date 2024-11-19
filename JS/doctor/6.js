var a = 1;
var c = 3;
function fn(a){
    console.log(a);// [Function: a]
    var a = 2;
    function a() {}
    var b = a;
    console.log(a);// 2
    console.log(c);// 3
}
fn(3);