const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Intern = require("./Develop/lib/Intern");
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const open = require("open");
const cards = require("./Develop/templates/cards");


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
                writeHTML(engineer)
              
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
                
                writeHTML(manager)
              
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

                writeHTML(intern)
            });
        }
    })
      
    function writeHTML(employee) {
        const head = cards.header()
        const foot = cards.footer()
        
        const store = cards.manager(employee)

        const concatenate = head + store + foot
        fs.writeFile("./Develop/output/team.html", concatenate, function(err){
            console.log(err)
        })
    }