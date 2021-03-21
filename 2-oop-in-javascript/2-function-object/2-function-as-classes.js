function Student(name, gpa) {
    this.name = name; this.gpa = gpa
    this.printDetails = function() {
        console.log(this.name + ' ' + this.gpa)
    }
}
var alex = new Student("alex", 3.5)
console.log(alex instanceof Student)  // true
alex.printDetails()  // alex 3.5

