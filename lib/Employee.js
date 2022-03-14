class Employee{
    constructor( name='none',id=0,email='none',role='Employee'){
        if (typeof name !== 'string' || !name.trim().length){
            throw new Error('Expected parameter "name" to be a non-empty string')
        }
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }
    getRole(){
        return this.role
    }

}


module.exports = Employee;