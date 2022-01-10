(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // add.js
  var require_add = __commonJS({
    "add.js"(exports, module) {
      var add2 = (a, b) => {
        return a + b;
      };
      module.exports = add2;
    }
  });

  // multiply.js
  var require_multiply = __commonJS({
    "multiply.js"(exports, module) {
      var multiply2 = (a, b) => a * b;
      module.exports = multiply2;
      console.log(multiply2(2, 3));
    }
  });

  // index.js
  var add = require_add();
  var multiply = require_multiply();
  console.log("Hello from the developer console!");
  console.log(new Date());
  console.log(multiply(add(2, 2), 4));
})();
