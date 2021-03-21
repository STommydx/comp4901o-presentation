class Student {
    static maxGpa = 4.3
    constructor(name, gpa) { this.name = name; this.gpa = gpa }
    static printMax() { console.log(this.maxGpa) }
}
var alex = new Student('Alex', 3.8)
console.log(Student.maxGpa)  // print out 4.3
console.log(alex.maxGpa)  // print out undefined
Student.printMax()  // print out 4.3
// alex.printMax()  // fail to run

