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

];

function init() {
    inquirer
        .prompt(questions)
}

init()