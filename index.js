const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require('./Engineer')
const Manager = require('./Manager')
const Intern = require('./Intern')
const Employee = require('./Employee')


const questions = [

    {
        type: 'list',
        name: 'employeePosition',
        message: 'What employee position would you like to add?',
        choices: ['Manager', 'Engineer', 'Employee', 'Intern'],
    }
];

function init() {
    inquirer
        .prompt(questions)
}

init()