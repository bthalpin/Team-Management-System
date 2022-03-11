const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const addStaff = require('./src/addStaff/addStaff');

// // const emp1 = new Employee();
// const eng = new Engineer('mygithub','joe','email2');
// const man = new Manager(1,'brian','email1')
// const int = new Intern('RU','mark','gmail')


// console.log(man1,emp2)
// man1.getName()
const inquirer = require('inquirer');
const fs = require('fs');


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
        // let runAgain=true;
        // function addStaff(currentRole='Manager'){
        //     return inquirer
        //         .prompt([
        //             {
        //                 type:'input',
        //                 name:'name',
        //                 message:'What is your name? '
        //             },
        //             {
        //                 type:'input',
        //                 name:'email',
        //                 message:'What is your email? '
        //             },
        //             {
        //                 type:'input',
        //                 name:'location',
        //                 message:(answers)=>{
        //                     if(currentRole==='Manager'){
        //                         return 'What is your office number?'
        //                     }else if(currentRole==='Intern'){
        //                         return 'What school do you go to?'
        //                     }else{
        //                         return 'What is your github?'
        //                     }
        //                 }
        //             },
        //             // {
        //             //     type:'confirm',
        //             //     name:'addStaff',
        //             //     message:'Add more staff?'
        //             // },
        //             {
        //                 type:'list',
        //                 name:'addStaff',
        //                 message:'If you would like to add more staff, please select what you need: ',
        //                 choices:['Engineer','Intern','Never mind, no more staff needed']
        //             }
                    
        //         ])
        //         .then(answers=>{
        //             console.log(answers)
        //             let newEmployee;
        //             if (currentRole==='Manager'){
        //                 newEmployee = new Manager(answers.location,answers.name,answers.email)
        //             }else if (currentRole === 'Engineer'){
        //                 newEmployee = new Engineer(answers.location,answers.name,answers.email)
        //             }else if (currentRole === 'Intern'){
        //                 newEmployee = new Intern(answers.location,answers.name,answers.email)
        //             }
        //             staff.push(newEmployee)
        //             // currentRole=answers.role
        //             if(answers.addStaff!=='Never mind, no more staff needed'){
        //                 addStaff(answers.addStaff)}
                //    })
                // })}
                // let runAgain =true
                // const newStaff =new Promise(addStaff())
                // while (runAgain){
        //     newStaff.then(answers=>{
        //         if (!answers.addMore){
        //             runAgain=false
        //         }
        //         staff.push(answers)
        //     })
        // }

    // function createHTML(){
        
        // }
        addStaff.addStaff()
        // .then(()=>{
        // })
        // createHTML()
        
        
        
