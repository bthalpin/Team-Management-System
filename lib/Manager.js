const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber,name,email){
        if (typeof officeNumber !== 'number' || isNaN(officeNumber) || officeNumber < 0){
            throw new Error('Expected parameter "officeNumber" to be a non-negative number')
        }
        super(name,email)
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
}

module.exports = Manager;