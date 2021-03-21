class Student {
    constructor(name, gpa) {
        this.name = name
        this.gpa = gpa
    }
    printDetails() {
        console.log(this.name + ' ' + this.gpa)
    }
}
var alex = new Student("alex", 3.8)
var bob = new Student("bob", 3.6)
alex.printDetails()  // print out "alex 3.8"
bob.printDetails()  // print out "bob 3.6"

