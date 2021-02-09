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

const trueSchool = new School("Novelle");
const cool = new School("Aisha")

console.log(trueSchool.numberOfCourses)