const Employee = require('./employee');

class Intern extends Employee {
    constructor(school,name,email){
        super(name,email,'Intern')
        this.school = school;
    }
    getSchool(){
        // returns school
        return this.school
    }
}

module.exports = Intern;