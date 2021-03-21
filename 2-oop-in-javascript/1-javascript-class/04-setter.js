class Student {
    constructor(name, gpa) { this.name = name; this.gpa = gpa }
    set fullName(fullName) {
        this.name = fullName.split(' ')[0]
    }
}
var alex = new Student("alex", 3.5)
alex.fullName = "Alex Lee"
console.log(alex.name)  // print out "Alex"

