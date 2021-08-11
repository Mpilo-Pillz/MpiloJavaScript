class School {

    numberOfCourses = 4;
    nameOfSchool = "TooCoolSchool";
    isOldSchool = false;
    isTeachingNewTech = true;
    nameOfStudent;

    course = {
       name: "JavaScript",
       numberOfAssignments: 12,
       topics: ["Objects", "Arrays", "Dom manipulation", "fundermentals"],
       assessments : {
            exam: false,
            assignment: true
       } 
    }

    constructor(whosSchool) {
        this.nameOfStudent = whosSchool
    }

    getSchoolName() {
        return this.nameOfSchool;
    }

    setSchoolName(name) {
        this.nameOfSchool = name;
    }

    addSubject() {
        this.numberOfCourses++;
    }
}

const trueSchool = new School("Tates");
const cool = new School("Alisha");





console.log(trueSchool.numberOfCourses)
console.log('school name is ' + trueSchool.getSchoolName())
cool.setSchoolName("Damian");
console.log(cool)