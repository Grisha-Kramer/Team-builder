const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Intern = require("./Develop/lib/Intern");
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const open = require("open");
const cards = require("./Develop/templates/cards");

// function initialize() {
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
                console.log(engineer)

                const head = cards.header()
                console.log(head)
                const store = cards.engineer(engineer)
                console.log(store)
                const foot = cards.footer()
                console.log(foot)
                const concatenate = head + store + foot
                fs.writeFile("team.html", concatenate, function (err) {
                    console.log(err)
                })

                

                
                // Team.splice(team.length-1,0,engineer.getHTML());
                // makeTeam();
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
                let manager = new manager(inputs.name, inputs.id, inputs.email, inputs.office)
                Team.splice(team.length-1,0,manager.getHTML());
                makeTeam();
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
                Team.splice(team.length-1,0,intern.getHTML());
                makeTeam();
            })
    }
    return printHTML(team);
});
    function printHTML(team){
        fs.writeFile("team.html", team) 

    open("team.html");
    
    


initalize()
.then((answers)=>{
  const manager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber);
  team.splice(team.length-1,0,manager.getHTML());
  buildTeam();
})
    }
