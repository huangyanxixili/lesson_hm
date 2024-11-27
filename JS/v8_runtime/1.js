// hoisting 提升
console.log(a,func); // undefined  function func(){}
// console.log(b); // 词法环境中的变量/常量（let/const），在声明前不能访问
// 暂时性死区（TDZ）
var a = 1;
function func() {

}
let b = 2;