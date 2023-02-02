const inquirer = require("inquirer");

const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

const buildPage = require("./pageBuilder.js");

const managers = [];
const engineers = [];
const interns = [];

const Questions = require("./questions");

const runEngineerQuestions = () => {
    inquirer
        .prompt(Questions.EngineerQuestions)
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github)
            engineers.push(engineer);
            
            runNextActionQuestions();
        })
}

const runInternQuestions = () => {
    inquirer
        .prompt(Questions.InternQuestions)
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school)
            interns.push(intern);

            runNextActionQuestions();
        })
}

const runNextActionQuestions = () => {
    inquirer
        .prompt(Questions.NextActionQuestions)
        .then((response) => {    
            switch (response.nextAction) {
                case 'Add Engineer':
                    runEngineerQuestions()
                    break;
                case 'Add Intern':
                    runInternQuestions()
                    break;
                case 'Finish building team':
                    console.log("Finished")

                    buildPage(managers, engineers, interns);
                    break;
                default:
                    console.log('default')
                    break;
            }
        });
};

const runQuestions = () => {
    inquirer
        .prompt(Questions.ManagerQuestions)
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
            managers.push(manager);

            runNextActionQuestions();
        });
};

module.exports = runQuestions;