const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber,role='Manager'){
        this.officeNumber = officeNumber;
        this.role = role;
    }
}

module.exports = Manager;