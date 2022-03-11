const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// // const emp1 = new Employee();
// const eng = new Engineer('mygithub','joe','email2');
// const man = new Manager(1,'brian','email1')
const int = new Intern('RU','mark','gmail')


// console.log(man1,emp2)
// man1.getName()
const inquirer = require('inquirer');
const fs = require('fs');
const htmlPage = require('./src/html/htmlPage');

let teamName = 'My Team'
// let staff =[{name:'bob',
// role:'manage',
// id:1,
// email:'gmail',
// officeNumber:8,
// },
// {name:'steve',
// role:'engine',
// id:2,
// email:'mail',
// github:'mygithub',
// },int]
// let a = "<html><head></head><body>"
// y = x.map(item=>{
    //     return(
        //         `<div>
        //             <h1>${item}</h1>
        //         </div>`
        //     )
        // })
        // let c ="</body></html>"
        
        // // console.log(y)
        inquirer
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
                    name:'school',
                    message:'What is your school? '
                },
                
            ])
            .then(answers=>{
                console.log(answers)
                const staff =  [new Intern(answers.school,answers.name,answers.email)]
                fs.writeFile('index.html',htmlPage(teamName,staff),err=>{
                    err?console.log(err):console.log('html')
                })})
           
