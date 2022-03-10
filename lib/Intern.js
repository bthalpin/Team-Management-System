const Employee = require('./employee');

class Intern extends Employee {
    constructor(school,role='Intern'){
        this.school = school;
        this.role = role;
    }
    getSchool(){

    }
}

module.exports = Intern;