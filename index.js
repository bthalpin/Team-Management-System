const Manager = require('./lib/manager');
const Employee = require('./lib/employee');

// const emp1 = new Employee();
const emp2 = new Employee('joe','email2');
const man1 = new Manager(1,'brian','email1')

console.log(man1,emp2)
man1.getName()