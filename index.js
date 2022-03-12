const fs = require('fs');
const generateHtml = require('./utils/generateIndexhtml');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const employee = []
console.log(employee)


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

const questions = [

   
    // type of team member to add
    {
        type: 'list',
        name: 'employeePosition',
        message: 'What employee position would you like to add?',
        choices: ['Engineer', 'Intern', 'Quit'],
        validate: ({ newPosition }) => {
            if (newPosition) {
                return true;
            } else {
                return false;
            }
        }
    },
    
    // engineer name
    {
        type: 'input',
        name: 'engineer',
        message: 'What is the name of the Engineer?',
        when: (answer) => {
            if (answer.employeePosition === 'Engineer') {
                return true;
            }
        }
    },
    
    // engineer ID
    {
        type: 'input',
        name: 'engineerID',
        message: 'What is the employee ID of the Engineer?',
        when: (answer) => {
            if (answer.employeePosition === 'Engineer') {
                return true;
            }
        }
    },
    
    // engineer email
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the email address of the engineer?',
        when: (answer) => {
            if (answer.employeePosition === 'Engineer') {
                return true;
            }
        }
    },
    
    // engineer github
    {
        type: 'input',
        name: 'engineerGit',
        message: 'What is the GitHub username of the engineer?',
        when: (answer) => {
            if (answer.employeePosition === 'Engineer') {
                return true;
            }
        }
    },
    
    {
        type: 'confirm',
        name: 'newPosition',
        message: 'Would you like to add another position?',
        default: true,
        when: (answer) => {
            if (answer.employeePosition === 'Engineer') {
                return true;
            } else if (answer.newPosition === true) {
                return true; 
            } else {
                return false;
            }
        }
    },
    
    // Intern name
    {
        type: 'input',
        name: 'intern',
        message: 'What is the Name of the Intern?',
        when: (answer) => {
            if (answer.employeePosition === 'Intern') {
                return true;
            }
        }
    },
    
    // Intern ID
    {
        type: 'input',
        name: 'internID',
        message: 'What is the employee ID of the Intern?',
        when: (answer) => {
            if (answer.employeePosition === 'Intern') {
                return true;
            }
        }
    },
    
    // Intern email
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the email of the Intern?',
        when: (answer) => {
            if (answer.employeePosition === 'Intern') {
                return true;
            }
        }
    },
    
    // Intern school
    {
        type: 'input',
        name: 'internSchool',
        message: 'What School did the intern attend?',
        when: (answer) => {
            if (answer.employeePosition === 'Intern') {
                return true;
            }
        }
    },
  
];


const askQuestions = () => {
    inquirer
        .prompt(managerQuestions).then((answer) => {
                position = new Manager(
                    answer.managerName,
                    answer.managerID,
                    answer.managerEmail,
                    answer.managerOffice
                )
                employee.push(position)
                console.log(employee)
            });

            // switch (input) {
            //     case 'managerName':
            //     case 'managerID':
                
            //     break;
        
            // }
}


const writeToFile = data => {
    let newData = generateHtml(data)
    fs.writeFile('./dist/index.html', newData, function (error) {
        if (error) {
            return console.log(error);
        } else {
            console.log("Your index html was created friend!")
        }
    })
}


const init = () => {
    askQuestions()
}
// const init = () => {
//     inquirer
//         .prompt(questions)
//     .then (data => {
//         return data;
//     })
// }



init()
    .then(index => {
        return writeToFile(index)
    })

