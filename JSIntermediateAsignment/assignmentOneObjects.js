class School {
    numberOfCourses = 4;
    nameOfSchool;
    isOldSchool = false;
    isTeachingNewTech = true;

    course = {
       name: "JavaScript",
       numberOfAssignments: 12,
       topics: ["Objects", "Arrays", "Dom manipulation", "fundermentals"],
       assessments : {
            exam: false,
            assignment: true
       } 
    }

    getSchoolName() {
        return this.nameOfSchool;
    }

    setSchoolName(name) {
        this.nameOfSchool = "TooCoolSchool";
    }

    addSubject() {
        this.numberOfCourses++;
    }
}

const trueSchool = new School();

console.log(trueSchool.numberOfCourses)