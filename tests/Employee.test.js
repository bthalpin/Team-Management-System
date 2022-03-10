const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an object with a name, id, and email if valid arguments were provided', () => {
            const employee = new Employee('Brian',1,'brian.t.halpin@gmail.com')

            expect(employee.name).toEqual('Brian');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('brian.t.halpin@gmail.com');
            expect(employee.role).toEqual('Employee');

        })
        it('should throw an error if no arguments are provided', () => {
            const employee = () => new Employee();
            const err = new Error('Expected parameter "name" to be a non-empty string');
    
            expect(employee).toThrowError(err);
        })
        it('should throw an error if no arguments are provided', () => {
            const employee = () => new Employee();
            const err = new Error('Expected parameter "name" to be a non-empty string');
    
            expect(employee).toThrowError(err);
        })
    })
})