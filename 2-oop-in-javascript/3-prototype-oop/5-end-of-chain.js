var alice = {}
console.log(alice.whatever)  // undefined
console.log(Object.getPrototypeOf(alice) === Object.prototype) // true
console.log(Object.getPrototypeOf(Object.prototype)) // null

