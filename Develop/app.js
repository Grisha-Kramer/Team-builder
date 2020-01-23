const inquirer = require("inquirer");
const generateHTML = require(".generateHTML");
const axios = require("axios");
const fs = require('fs');


inquirer
    .prompt ([
        {
            type: "input",
            message: "What is your name",
            name: "name"

    },
    {
        type: "input",
        message: "Provide your email",
        name: "email"
    },
    {
        type: "list",
        message: "Select your role",
        choices: ["Engineer", "Intern", "Manager", "Employee"],
        name: "role"

    }])
    .then(replies => {
        if (replies.role === "Engineer")
            return inquirer.prompt([
                {
                    type: "input",
                    message: "What is your github username?",
                    name: "github"
                }
            ])
        console.log(replies)
        const name = replies.name;
        const email = replies.email;
        const role = replies.role;
        const github = replies.github;
    })


    const html = <html>
       
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <meta charset="UTF-8"></meta>
        <body>
        <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
            <div class="card-header">Employee name</div>
            <div class="card-body">
              <h5 class="card-title">Role</h5>
              <p class="card-text">Email: <a href="#"><span class="glyphicon glyphicon-envelope"></span></a></p>
            </div>
          </div>
          </body>

        
    </html>