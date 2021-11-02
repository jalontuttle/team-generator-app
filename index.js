const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const inquirer = require('inquirer');
const fs = require('fs');
const teamList = [];

inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is your name?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is your id number?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your email?',
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'What is your office number?',
        
        },
        
    ])
    .then((answers) => {
        console.log(answers)
        const manager1 = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamList.push(manager1);
        menu();
    });

function menu() {
    inquirer
        .prompt([
            {
                name: 'team',
                type: 'list',
                choices: ['Engineer', 'Intern', 'Finished'],
                message: 'Would you like to add another team member?',
            },
        ]);
        .then((answers => {
            console.log(answers);

            if (answers.team === 'Engineer') {
                engineerQues();
            }
            else if (answers.team === 'Intern') {
                internQues();
            }
            else (answers.team === 'Finished') {
                renderDoc();
            }
        })
    }

function engineerQues() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'What is your name?',
            },
            {
                name: 'id',
                type: 'input',
                message: 'What is your id number?',
            },
            {
                name: 'email',
                type: 'input',
                message: 'What is your email?',
            },
            {
                name: 'github',
                type: 'input',
                message: 'What is your GitHub username?',
            },
        ])
}

// function generateMarkdown(data) {
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
        
//     </body>
//     </html>`
