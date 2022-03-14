const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer')
// const createFile = require('../createFile/createFile');
const htmlPage = require('./src/templates/html/htmlPage');
const cssPage = require('./src/templates/css/cssTemplate');
const fs = require('fs');
const path = require('path')

const DIST_DIR = path.resolve(__dirname, 'dist');
const htmlPath = path.join(DIST_DIR, 'team.html');
const cssPath = path.join(DIST_DIR, 'style.css');

// Staff stored in array for use in html file creation
let staff =[]
let idList = []
let currentEmployee;

function createFile(){
    if(!fs.existsSync(DIST_DIR)){
        fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(htmlPath,htmlPage(staff),err=>{
        err?console.log(err):console.log('\nHTML File Created\n')
    })
    fs.writeFileSync(cssPath,cssPage(),err=>{
        err?console.log(err):console.log('\nCSS File Created\n')
    })
}

// Waits for input before returning
async function getBasicInfo (role) {
    return await inquirer
    .prompt([
        {
            type:'input',
            name:'name',
            message:`What is the ${role}'s name? `,
            
            // Ensures something is typed besides spaces
            validate:(name)=>name.trim().length>0
        },
        {
            type:'input',
            name:'id',
            message:`Enter the ID for the ${role}: `,
            
            // Ensures something is typed besides spaces
            validate:(id)=>!idList.includes(id)?true:'That ID is already used, please enter another ID number.'
        },
        {
            type:'input',
            name:'email',
            message:`What is the email address for the ${role}? `,
            
            // Validates the email based on the email pattern
            validate:(email)=>{
                mailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                if (!mailPattern.test(email)){
                    return 'Must be a valid email address'
                }
                return true
            }
        }]).then(answers=>{
            // Removes any blank space at beginning or ending of the name or email
            answers.name = answers.name.trim()
            answers.email = answers.email.trim()
            // Adds ID to list of IDs to prevent duplicates
            idList.push(answers.id)

            currentEmployee = answers;
            
        }
        )
    }

    function addEngineer(){
        getBasicInfo('Engineer').then(()=>{
            inquirer.prompt([
                {
                    type:'input',
                    name:'github',
                    message:`What is the Engineer's GitHub account? `
                }
            ]).then(roleInfo => {
                const engineer = new Engineer(currentEmployee.name,currentEmployee.id,currentEmployee.email,roleInfo.github)
                staff.push(engineer)
                additionalStaff()
            })

        }

        )
    }

    function addIntern(){
        getBasicInfo('Intern').then(()=>{
            inquirer.prompt([
                {
                    type:'input',
                    name:'school',
                    message:`What is the school does the Intern attend? `
                }
            ]).then(roleInfo => {
                const intern = new Intern(currentEmployee.name,currentEmployee.id,currentEmployee.email,roleInfo.school)
                staff.push(intern)
                additionalStaff()
            })
        }

        )
    }

    function additionalStaff () {
        inquirer.prompt([
            {
                type:'list',
                name:'moreStaff',
                message:'Please select if you would like to add any additional staff: ',
                choices:['Engineer','Intern','No additional staff needed']
            }
        ]).then(choice=>{
            switch (choice.moreStaff){
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    createFile()
            }
        })
    }
    
    function startTeamBuilding () {
    console.log('\nWelcome to the Team Management System.  Please build your team.\n')
    getBasicInfo('Manager').then(()=>{
        inquirer.prompt([
            {
                type:'input',
                name:'officeNumber',
                message:`What is the Manager's office number? `
            }
        ]).then(roleInfo => {
            const manager = new Manager(currentEmployee.name,currentEmployee.id,currentEmployee.email,roleInfo.officeNumber)
            staff.push(manager)
            additionalStaff()
        })

    })
}

startTeamBuilding()