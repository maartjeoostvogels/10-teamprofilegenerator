const inquirer = require('inquirer');
const fs = require('fs');

const MainQuestions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'addteammember',
        choices: ['Add Manager', 'Add Engineer', 'Add Intern', 'Finish'],
    }
];

const ManagerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee e-mail?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee officeNumber?',
    }
];

const EngineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee e-mail?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the employee github?',
    }
];

const InternQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee e-mail?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the employee school?',
    }
];

module.exports = {MainQuestions, ManagerQuestions, EngineerQuestions, InternQuestions};