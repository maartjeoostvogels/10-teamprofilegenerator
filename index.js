const inquirer = require('inquirer');
const fs = require('fs');


const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

const teamquestions = [
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'addteammember',
      choices: ['Add Manager, Add Engineer, Add Intern, Finish'],
    },
  
function exitHouse() {
      inquirer.prompt(teamquestions).then((answers) => {
        if (answers.direction === 'Forward') {
          console.log('You find yourself in a forest');
          console.log(
            'There is a wolf in front of you; a friendly looking dwarf to the right and an impasse to the left.'
          );
          encounter1();
        } else {
          console.log('You cannot go that way. Try again');
          exitHouse();
        }
      });
    }
    {
      type: 'input',
      name: 'name',
      message: 'What is the employee name?',
    },
    {
      type: 'choice',
      name: 'email',
      message: 'What is the employee e-mail?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employee id?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your office number?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ]

  function writeToFile(fileName, answers) {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile(fileName, htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  };

  function init() {
    inquirer.prompt(questions).then((answers) => {
      writeToFile("index.html", answers);
    });
  }

// Function call to initialize app
init();