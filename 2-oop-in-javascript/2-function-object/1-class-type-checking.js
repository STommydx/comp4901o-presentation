class Student {
    constructor(name, gpa) { this.name = name; this.gpa = gpa }
    printDetails() { console.log(this.name + ' ' + this.gpa) }
}
console.log(Student instanceof Function)  // true
console.log(Student.constructor == Function)  // true
var alex = new Student("alex", 3.5)
console.log(alex.constructor instanceof Function)  // true
console.log(alex.constructor.constructor === Function)  // true

