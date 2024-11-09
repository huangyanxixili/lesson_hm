"use strict";
// 严格模式下 LHS 查询就会报错， 就会和RHS 一样报错
// ReferenceError: b is not defined

function foo() {
    b = 2;
}

foo();