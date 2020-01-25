const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Intern = require("./Develop/lib/Intern");
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const open = require("open");
const cards = require("./Develop/templates/cards");

let injectHTML = ``

runAgain();

function runAgain() {
    return inquirer
    .prompt ([
        {
            type: "list",
            message: "Select the role you wish to add",
            choices: ["Engineer", "Intern", "Manager"],
            name: "role"
        }

    ])
    .then(replies => {
        if (replies.role === "Engineer") {
            return inquirer.prompt([
                {
                    type: "input",
                    message: "What is your github username?",
                    name: "github"
                },
                {
                    type: "input",
                    message: "Enter name?",
                    name: "name"
            },
            {
                type: "input",
                message: "Input ID",
                name: "id"
            },
            {
                type: "input",
                message: "Employee email?",
                name: "email"
            }
            ]).then((inputs)=> {
                let engineer = new Engineer(inputs.name, inputs.id, inputs.email, inputs.github);
                handleAnswers(engineer, `engineer`)
              
            })
        }
        else if (replies.role === "Manager"){
            return inquirer.prompt ([
            {
                type: "input",
                message: "Enter manager name:",
                name: "name"
            },
            {
                type: "input",
                message: "Enter ID",
                name: "id"
            },
            {
                type: "input",
                message: "Enter email",
                name: "email"
            },
            { 
                type: "input",
                message: "Enter office number",
                name: "office"
            }
            ]).then((inputs)=>{
                let manager = new Manager(inputs.name, inputs.id, inputs.email, inputs.office)
                
                handleAnswers(manager, `manager`)
              
            })
        }
        else if (replies.role === "Intern"){
            return inquirer.prompt ([
            {
                type: "input",
                message: "Enter Intern name:",
                name: "name"
            },
            {
                type: "input",
                message: "Enter ID",
                name: "id"
            },
            {
                type: "input",
                message: "Enter email",
                name: "email"
            },
            { 
                type: "input",
                message: "Enter school",
                name: "school"
            }
            ]).then((inputs)=>{
                let intern = new Intern(inputs.name, inputs.id, inputs.email, inputs.school)

                handleAnswers(intern, `intern`)
            });
        }
    })
} // end of runAgain 

    function writeHTML(html) {
        const head = cards.header()
        const foot = cards.footer()
        html = head + html + foot
        fs.writeFile("./Develop/output/team.html", html, function(err){
            console.log(err)

        })
    }

    function handleAnswers(employee, type) {
        if(type == "engineer"){
            var store = cards.engineer(employee)
        } 
        else if(type == "intern"){
            var store = cards.intern(employee)
        }
        else if(type =="manager"){
            var store = cards.manager(employee)
        }
        injectHTML = injectHTML + store

        inquirer.prompt([{
            type: "list",
            message: "Add more team members",
            choices: ["Yes", "No"],
            name: "More"
        }]).then(function(answer) {
            if(answer.More == "Yes") {
                runAgain();
            }
            else if(answer.More == "No"){
                console.log("Thanks!")
                writeHTML(injectHTML);
            }
        })
    }