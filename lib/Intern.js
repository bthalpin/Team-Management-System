const Employee = require('./employee');

class Intern extends Employee {
    constructor(school){
        this.school = school;
        this.role = 'Intern';
    }
    getSchool(){
        // returns school
    }
}

module.exports = Intern;