class Student {
    constructor(name, gpa) { this.name = name; this.gpa = gpa }
    get honor() {
        if (this.gpa >= 3.5) return "1st"
        if (this.gpa >= 2.15) return "2nd"
        if (this.gpa >= 1.5) return "3rd"
        return "pass"
    }
}
var alex = new Student("alex", 3.8)
console.log(alex.honor)  // print out "1st"

