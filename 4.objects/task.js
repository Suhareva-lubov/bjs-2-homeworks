function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.hasOwnProperty("marks")) {
        let arr = this.marks;
        this.marks = [...arr, ...marks];
    }
  
}

Student.prototype.getAverage = function () {
    if (this.hasOwnProperty("marks") && this.marks.length != 0) {
        let sum = this.marks.reduce((acc, item) => {return acc + item}, 0);
        return parseFloat((sum / this.marks.length).toFixed(2));
    } else return 0;
  
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;  
}
