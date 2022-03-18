const fs = require('fs');
const generateHtml = require('./utils/generatehtml');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


//stores input employees
const employees = []
console.log(employees)

//manager questions
const managerQuestions = [

       //Manager name
       {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the team manager?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name of the manager!');
                return false; 
            }
        }
    },

    //Manager ID
    {
        type: 'input',
        name: 'managerID',
        message: 'What is the ID of the team manager?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a ID!');
                return false; 
            }
        }
    },

    //Manager ID
    {
        type: 'input',
        name: 'managerID',
        message: 'What is the employee ID of the team manager?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a employee ID!');
                return false; 
            }
        }
    },

    //Manager email
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the email of the team manager?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a email!');
                return false; 
            }
        }
    },
    
    //Manager office
    {
        type: 'input',
        name: 'managerOffice',
        message: 'What is the office number of the team manager?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a office number!');
                return false; 
            }
        }
    },

]
//engineer questions
const EngineerQuestions = [

    // engineer name
    {
        type: 'input',
        name: 'engineer',
        message: 'What is the name of the Engineer?',
        
    },
    
    // engineer ID
    {
        type: 'input',
        name: 'engineerID',
        message: 'What is the employee ID of the Engineer?',
       
    },
    
    // engineer email
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the email address of the engineer?',
       
    },
    
    // engineer github
    {
        type: 'input',
        name: 'engineerGit',
        message: 'What is the GitHub username of the engineer?',
        
    },
    
  
];
// intern questions
const internQuestions = [
// Intern name
{
    type: 'input',
    name: 'internName',
    message: 'What is the Name of the Intern?',
    
},

// Intern ID
{
    type: 'input',
    name: 'internID',
    message: 'What is the employee ID of the Intern?',
    
},

// Intern email
{
    type: 'input',
    name: 'internEmail',
    message: 'What is the email of the Intern?',
    
},

// Intern school
{
    type: 'input',
    name: 'internSchool',
    message: 'What School did the intern attend?',
    
},

]

// employee positions question
const employeePosition = [
    {
        type: 'list',
        name: 'employeePosition',
        message: 'What employee position would you like to add?',
        choices: ['Engineer', 'Intern', 'Finalize team'],
    }
]

// function that controls the questions
askRoleQuestions = () => {
    inquirer.prompt(employeePosition).then((newData) => {
        // engineer questions
        if (newData.employeePosition === 'Engineer') {
            inquirer.prompt(EngineerQuestions).then((engineerData) => {
                engineerP = new Engineer(
                    engineerData.engineer,
                    engineerData.engineerID,
                    engineerData.engineerEmail,
                    engineerData.engineerGit
                )
                employees.push(engineerP)
                //goes back through questions
                askRoleQuestions()
            })
        }
        //intern questions
        if (newData.employeePosition === 'Intern') {
            inquirer.prompt(internQuestions).then((internData) => {
                internP = new Intern(
                    internData.internName,
                    internData.internID,
                    internData.internEmail,
                    internData.internSchool
                )
                employees.push(internP)
                //goes back through questions
                askRoleQuestions()
            })
        }
        // finish team
        if (newData.employeePosition === 'Finalize team') {
            writeToFile(employees)
        }
    })
}


// writes the file to html
const writeToFile = newData => {
    fs.writeFile('./dist/index.html', generateHtml(newData), error => {
        if (error) {
            return console.log(error);
        } else {
            console.log("Your index html was created friend!")
        }
    })
}

// init
const init = () => {
    inquirer
    .prompt(managerQuestions).then((answer) => {
        position = new Manager(
            answer.managerName,
            answer.managerID,
            answer.managerEmail,
            answer.managerOffice
            )
            employees.push(position)
            askRoleQuestions()
        });
        
    }
     
    
    // init call
init()
 
