const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github,name,email,){
        super(name,email,'Engineer')
        this.github = github;
    }
    getGithub(){
        // returns github username
        return this.github
    }
}

module.exports = Engineer;