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

                <h2>${manager.name}</h2>
                <p>Employee Id: ${manager.id}</p>
                <p>E-mail: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
        </div>`;
        })

        let engineerHtml = "";
        engineers.forEach(engineer => {
            engineerHtml += `<div class="card">
                <h2>${engineer.name}</h2>
                <p>Employee Id: ${engineer.id}</p>
                <p>E-mail: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
        </div>`;
        })
        let internHtml = "";
        interns.forEach(intern => {
            internHtml += `<div class="card">

                <h2>${intern.name}</h2>
                <p>Employee Id: ${intern.id}</p>
                <p>E-mail: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
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