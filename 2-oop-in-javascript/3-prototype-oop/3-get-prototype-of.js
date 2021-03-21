class Student {
    constructor(name, gpa) { this.name = name; this.gpa = gpa }
    printDetails() { console.log(this.name + ' ' + this.gpa) }
}
var alex = new Student("alex", 3.8)
console.log(Object.getPrototypeOf(alex)) // {constructor: ƒ, printDetails: ƒ}
console.log(Object.getPrototypeOf(alex) === Student.prototype) // true

