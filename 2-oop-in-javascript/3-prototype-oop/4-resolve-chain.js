class Student { constructor(name, gpa) { this.name = name; this.gpa = gpa } }
class UGStudent extends Student {
    constructor(name, gpa, fyp) { super(name, gpa); this.fyp = fyp } }
var alex = new UGStudent('Alex', 3.8, 'Barcode Scanner App')
console.log(Object.getPrototypeOf(alex) === UGStudent.prototype)  // true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(alex)) 
            === Student.prototype)  // true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(alex)))
            === Object.prototype) // true
console.log(alex.toString === Object.prototype.toString) // true

