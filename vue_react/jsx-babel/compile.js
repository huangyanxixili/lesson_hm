"use strict";

// 原生 js 不能执行 jsx 语法
var hello = /*#__PURE__*/React.createElement("p", {
  className: "txt"
}, "Hello, ", /*#__PURE__*/React.createElement("span", null, "World"));
