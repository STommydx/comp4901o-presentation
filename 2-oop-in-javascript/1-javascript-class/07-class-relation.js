class Student {
    constructor(name, gpa) { this.name = name; this.gpa = gpa }
    printDetails() { console.log(this.name + ' ' + this.gpa) }
}
class UGStudent extends Student {
    constructor(name, gpa, fyp) { super(name, gpa); this.fyp = fyp }
    printFypDetails() { console.log(this.name + ' is doing ' + this.fyp) }
}
var a = new UGStudent('Alex', 3.8, 'Barcode Scanner App')
var b = new Student('Betty', 3.5)
console.log(a instanceof Object, b instanceof Object)  // true true
console.log(a instanceof Student, b instanceof Student)  // true true
console.log(a instanceof UGStudent, b instanceof UGStudent)  // true false
console.log(a.constructor == Object, b.constructor == Object)  // false false
console.log(a.constructor == Student, b.constructor == Student)  // false true
console.log(a.constructor == UGStudent, b.constructor == UGStudent)  // true false

