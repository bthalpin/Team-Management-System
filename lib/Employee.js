class Employee{
    static id = 0;
    constructor( name,email){
        if (typeof name !== 'string' || !name.trim().length){
            throw new Error('Expected parameter "name" to be a non-empty string')
        }
        this.name = name;

        // Creates a new id when a new employee is added
        this.id = Employee.id + 1;
        Employee.id++
        this.email = email;
        this.role = 'Employee';
    }

    getName(){
        // Returns name
        // console.log(this.name,this.id,this.email)
    }

    getId(){
        // Returns ID
    }

    getEmail(){
        // Returns Email
    }
    getRole(){
        // Returns 'Employee' by default
    }

}


module.exports = Employee;