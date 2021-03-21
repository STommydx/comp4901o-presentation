class Student {
    constructor(name, gpa) { this.name = name; this.gpa = gpa }
    printDetails() { console.log(this.name + ' ' + this.gpa) }
}
class UGStudent extends Student {
    constructor(name, gpa, fyp) { super(name, gpa); this.fyp = fyp }
    printFypDetails() { console.log(this.name + ' is doing ' + this.fyp) }
}
var alex = new UGStudent('Alex', 3.8, 'Barcode Scanner App')
alex.printDetails()  // print out "Alex 3.8"
alex.printFypDetails()  // print out "Alex is doing Barcode Scanner App"

