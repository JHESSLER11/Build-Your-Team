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

const roleQuestions = [

   
    // type of team member to add
    {
        type: 'list',
        name: 'employeePosition',
        message: 'What employee position would you like to add?',
        choices: ['Engineer', 'Intern', 'Finalize team'],
        
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

//manager questions
const askQuestions = () => {
   inquirer.prompt(managerQuestions).then(({ managerName, managerID, managerEmail, managerOffice }) => {
        switch (managerName, managerID, managerEmail, managerOffice) {
            case managerName:
            case managerID:
            case managerEmail:
            case managerOffice:
                manager = new Manager (
                    managerName,
                    managerID,
                    managerEmail,
                    managerOffice
                )
                employee.push(manager)
                console.log(employee)
                break;
        
            default:
                break;
        }
    })
}
 
askRoleQuestions = () => {
    inquirer.prompt(roleQuestions).then((data) => {
        switch (data) {
            case data.engineer:
            case data.engineerID:
            case data.engineerGit:
            case data.engineerOffice:
                engineer = new Engineer (
                    data.engineer,
                    data.engineerID,
                    data.engineerGit,
                    data.engineerOffice
                )
                    employee.push(engineer)
                        console.log(employee)
                        break;
                        
            default:
                break;
        }
                            

    })
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
    // inquirer
    // .prompt(managerQuestions).then((answer) => {
    //         position = new Manager(
    //             answer.managerName,
    //             answer.managerID,
    //             answer.managerEmail,
    //             answer.managerOffice
    //         )
    //         employee.push(position)
    //         console.log(employee)
    // });
        askQuestions()
        .then (() => {
            askRoleQuestions() }) 

}
// const init = () => {
//     inquirer
//         .prompt(questions)
//     .then (data => {
//         return data;
//     })
// }



init()
    // .then(index => {
    //     return writeToFile(index)
    // })

