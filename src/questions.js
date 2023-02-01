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
    }
];

const EngineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?',
    }
];

const InternQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?',
    }
];

module.exports = {MainQuestions, ManagerQuestions, EngineerQuestions, InternQuestions};