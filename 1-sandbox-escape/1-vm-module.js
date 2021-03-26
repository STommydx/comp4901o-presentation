const vm = require('vm')
let res = vm.runInNewContext(`let x = 4; x + x`)
console.log(res)  // 8
let res2 = vm.runInNewContext(`let x = 4; x + y`, { y: 5 })
console.log(res2)  // 9

