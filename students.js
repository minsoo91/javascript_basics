function Student(firstname, lastname) {
  this.firstname = firstname,
  this.lastname = lastname,
  this.courses = [];
}
function Course(cName, dept, numCredits, weekDays, timeBlock){
  this.cName = cName,
  this.dept = dept,
  this.numCredits = numCredits,
  this.students = [],
  this.weekDays = weekDays,
  this.timeBlock = timeBlock;
}



Student.prototype.name = function () {
  console.log(this.firstname + " " + this.lastname);
};
Student.prototype.enroll = function (course) {

  for (var i = 0; i < this.courses.length; i++){
    if (this.courses[i].conflictsWith(course)) {
      return "No way, dude, compadre"
    }
  }
  this.courses.push(course);
};
Student.prototype.courseLoad = function(){
  var cLoad = {};
  for (var i = 0; i < this.courses.length; i++){
    if (cLoad[this.courses[i].dept]) {
      cLoad[this.courses[i].dept] += this.courses[i].numCredits;
    } else {
      cLoad[this.courses[i].dept] = this.courses[i].numCredits;
    }
  }
  return cLoad;
};

Course.prototype.addStudent = function (student) {
  this.students.push(student);
};

Course.prototype.conflictsWith = function (otherCourse) {
  for (var i = 0; i < this.weekDays.length; i++) {
    for (var j = 0; j < otherCourse.weekDays.length; j++) {
      if (this.weekDays[i] === otherCourse.weekDays[j]) {
        if (this.timeblock === otherCourse.timeblock) {
          return true;
        }
      }
    }
  }
  return false;
};

var aaron = new Student("Aaron", "Cordovez");
var appAcad = new Course("A/a", "Ned", 100, ["Mon", "Tues"], 2);
var recursion = new Course("recursion", "Ned", 150, ["Tues", "Wed"], 2);
aaron.name();
appAcad.addStudent(aaron);
aaron.enroll(appAcad);
// console.log(aaron.enroll(recursion));
// console.log(aaron.courses)
// console.log(aaron.courses);
// console.log(appAcad.students);
// console.log(aaron.courseLoad());
// console.log(appAcad.conflictsWith(recursion));
