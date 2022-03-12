const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require('./Engineer')
const Manager = require('./Manager')
const Intern = require('./Intern')
const Employee = require('./Employee')


const questions = [

    // {
    //     type: 'list',
    //     name: 'employeePosition',
    //     message: 'What employee position would you like to add?',
    //     choices: ['Manager', 'Engineer', 'Employee', 'Intern'],
    //     when: ({ employeePosition }) => {
    //         if (employeePosition === 'Manager') {
    //             return ({ 'managerName' })
    //         } 
    //         // else if (employeePosition === 'Engineer') {
    //         //     return Engineer;
    //         // } else if (employeePosition === 'Employee') {
    //         //     return Employee;
    //         // } else if (employeePosition === 'Intern') {
    //         //     return Intern;
    //         // } 
    //         else {
    //             console.log('Please provide a position')
    //         }
    //     }
    // },

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

    // type of team member to add
    {
            type: 'list',
            name: 'employeePosition',
            message: 'What employee position would you like to add?',
            choices: ['Engineer', 'Intern'],
            // when: ({ employeePosition }) => {
            //     if (employeePosition === 'Engineer') {
            //         return ({ engineer });
            //     }
        
            // }
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

function init() {
    inquirer
        .prompt(questions)
}

init()