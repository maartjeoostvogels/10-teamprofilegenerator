const inquirer = require('inquirer');
const fs = require('fs');

const ManagerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team managers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team managers employee id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team managers e-mail?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team managers officeNumber?',
    }
];

const NextActionQuestions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'nextAction',
        choices: ['Add Engineer', 'Add Intern', 'Finish building team'],
    }
];

const EngineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineers employee id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineers e-mail?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineers github username?',
    }
];

const InternQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the interns name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the interns employee id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the interns e-mail?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the name of the school the interns attends?',
    }
];

module.exports = {ManagerQuestions, NextActionQuestions, EngineerQuestions, InternQuestions};