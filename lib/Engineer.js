const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github,role='Engineer'){
        this.github = github;
        this.role = role;
    }
    getGithub(){

    }
}

module.exports = Engineer;