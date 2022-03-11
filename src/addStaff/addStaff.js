const Manager = require('../../lib/manager');
const Engineer = require('../../lib/engineer');
const Intern = require('../../lib/intern');
const inquirer = require('inquirer')
const fs = require('fs');
const htmlPage = require('../../src/html/htmlPage');

let teamName = 'My Team'
let staff =[]
const addStaff = (currentRole='Manager') => {
        return inquirer
            .prompt([
                {
                    type:'input',
                    name:'name',
                    message:'What is your name? '
                },
                {
                    type:'input',
                    name:'email',
                    message:'What is your email? '
                },
                {
                    type:'input',
                    name:'location',
                    message:(answers)=>{
                        if(currentRole==='Manager'){
                            return 'What is your office number?'
                        }else if(currentRole==='Intern'){
                            return 'What school do you go to?'
                        }else{
                            return 'What is your github?'
                        }
                    }
                },
                // {
                //     type:'confirm',
                //     name:'addStaff',
                //     message:'Add more staff?'
                // },
                {
                    type:'list',
                    name:'addStaff',
                    message:'If you would like to add more staff, please select what you need: ',
                    choices:['Engineer','Intern','Never mind, no more staff needed']
                }
                
            ])
            .then(answers=>{
                console.log(answers)
                let newEmployee;
                if (currentRole==='Manager'){
                    newEmployee = new Manager(answers.location,answers.name,answers.email)
                }else if (currentRole === 'Engineer'){
                    newEmployee = new Engineer(answers.location,answers.name,answers.email)
                }else if (currentRole === 'Intern'){
                    newEmployee = new Intern(answers.location,answers.name,answers.email)
                }
                staff.push(newEmployee)
                // currentRole=answers.role
                if(answers.addStaff!=='Never mind, no more staff needed'){
                    addStaff(answers.addStaff)
                }else{
                    fs.writeFile('index.html',htmlPage(teamName,staff),err=>{
                        err?console.log(err):console.log('html')
                    })
                }
               })

               

}

module.exports = {
    addStaff,
    staff
};