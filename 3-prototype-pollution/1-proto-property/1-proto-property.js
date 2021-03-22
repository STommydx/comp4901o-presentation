class Student {
    constructor(name, gpa) { this.name = name; this.gpa = gpa }
    printDetails() { console.log(this.name + ' ' + this.gpa) }
}
var alex = new Student("alex", 3.8)
console.log(alex.__proto__ === Object.getPrototypeOf(alex)) // true
console.log(alex.__proto__ === Student.prototype) // true

