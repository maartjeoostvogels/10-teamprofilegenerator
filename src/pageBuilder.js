const fs = require('fs');

const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

const buildPage = (managers, engineers, interns) => {
    let html = fs.readFileSync("./templates/index.html", "utf-8");
    if (html) {
        let managerHtml = "";
        managers.forEach(manager => {
            managerHtml += `<div class="card">
            <div class= "card-header">
                <h2>${manager.name}</h2>
                <p>Employee Id: ${manager.id}</p>
                <p>E-mail: ${manager.email}</p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>`;
        })

        let engineerHtml = "";
        engineers.forEach(engineer => {
            engineerHtml += `<div class="card">
            <div class= "card-header">
                <h2>${engineer.name}</h2>
                <p>Employee Id: ${engineer.id}</p>
                <p>E-mail: ${engineer.email}</p>
                <p>Github: ${engineer.github}</p>
            </div>
        </div>`;
        })

        let internHtml = "";
        interns.forEach(intern => {
            internHtml += `<div class="card">
            <div class= "card-header">
                <h2>${intern.name}</h2>
                <p>Employee Id: ${intern.id}</p>
                <p>E-mail: ${intern.email}</p>
                <p>School: ${intern.school}</p>
            </div>
        </div>`;
        })

        html = html.replace("<!--Manager-->", managerHtml);
        html = html.replace("<!--Engineers-->", engineerHtml);
        html = html.replace("<!--Interns-->", internHtml);

        fs.writeFileSync("./dist/team.html", html, "utf-8");

        console.log("Daartje's Team Built");
    }
}

module.exports = buildPage;