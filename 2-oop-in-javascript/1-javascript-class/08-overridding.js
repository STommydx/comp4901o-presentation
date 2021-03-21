class Student {
    constructor(name, gpa) { this.name = name; this.gpa = gpa }
    toString() { return this.name + ' ' + this.gpa }
}
class UGStudent extends Student {
    constructor(name, gpa, fyp) { super(name, gpa); this.fyp = fyp }
    toString() { return this.name + ' is doing ' + this.fyp }
}
var alex = new UGStudent('Alex', 3.8, 'Barcode Scanner App')
console.log(alex + '') // print out "Alex is doing Barcode Scanner App"

