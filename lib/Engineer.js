const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github,name,email){
        super(name,email)
        this.github = github;
        this.role = 'Engineer';
    }
    getGithub(){
        // returns github username
    }
}

module.exports = Engineer;