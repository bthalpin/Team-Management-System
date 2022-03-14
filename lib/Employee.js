class Employee{
    // static id = 0;
    constructor( name='none',id=0,email='none',role='Employee'){
        if (typeof name !== 'string' || !name.trim().length){
            throw new Error('Expected parameter "name" to be a non-empty string')
        }
        this.name = name;

        // Creates a new id when a new employee is added
        // this.id = Employee.id + 1;
        // Employee.id++
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName(){
        // Returns name
        // console.log(this.name,this.id,this.email)
        return this.name
    }

    getId(){
        // Returns ID
        return this.id
    }

    getEmail(){
        // Returns Email
        return this.email
    }
    getRole(){
        // Returns 'Employee' by default
        return this.role
    }

}


module.exports = Employee;