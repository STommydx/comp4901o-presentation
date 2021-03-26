const vm = require('vm')
console.log(({}).constructor)  // [Function: Object]
console.log(({}).constructor.constructor)  // [Function: Function]
console.log(vm.runInNewContext(`this.constructor`, {}))
                                      // [Function: Object]
console.log(vm.runInNewContext(`this.constructor.constructor`, {}))
                                                // [Function: Function]
