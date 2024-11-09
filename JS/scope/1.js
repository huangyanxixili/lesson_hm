var a = 1;
var b = 4;
function foo(){
    //执行阶段再进行赋值（在编译阶段已经完成了变量的声明，a为undefined未定义） 1 4
    console.log(a,b);

    var a = 2; 
    // console.log(a);
    var a = 3
    function bar(){
        return a + b;
    }   
    // console.log(bar());

    // console.log(a,b);
}
foo();

