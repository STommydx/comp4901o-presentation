class Student { constructor(name, gpa) { this.name = name; this.gpa = gpa } }
var alex = new Student("alex", 3.8)
alex.__proto__.defer = true  // Student.prototype.defer = true
var bob = new Student("bob", 3.5)
console.log(alex.defer, bob.defer)  // true true
console.log(alex instanceof Student, bob instanceof Student) // true true
alex.__proto__ = {}
console.log(alex.defer, bob.defer)  // undefined true
console.log(alex instanceof Student, bob instanceof Student) // false true
bob.__proto__ = null
console.log(alex instanceof Object, bob instanceof Object) // true false

