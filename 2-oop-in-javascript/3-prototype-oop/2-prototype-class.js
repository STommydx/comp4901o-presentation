class Student {
    constructor(name, gpa) { this.name = name; this.gpa = gpa }
    printDetails() { console.log(this.name + ' ' + this.gpa) }
}
console.log(Student.prototype) // {constructor: ƒ, printDetails: ƒ}

