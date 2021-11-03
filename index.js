const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const inquirer = require('inquirer');
const template = require('./generateTemplate')
const fs = require('fs');
const teamList = [];
const idArray = [];

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
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamList.push(manager);
        idArray.push(answers.managerId)
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
        ])
        .then(userchoice => {
            console.log(userchoice);
            switch (userchoice.team) {
                case 'Engineer':
                    engineerQues();
                    break;
                case 'Intern':
                    internQues();
                default:
                    buildTeam();
            }

        })
}

function engineerQues() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'What is the name of your employee?',
            },
            {
                name: 'id',
                type: 'input',
                message: 'What is the id number of your employee?',
            },
            {
                name: 'email',
                type: 'input',
                message: 'What is the email for your employee?',
            },
            {
                name: 'github',
                type: 'input',
                message: 'What is the GitHub username for your employee?',
            },
        ])
        .then((answers) => {
            console.log(answers)
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamList.push(engineer);
            idArray.push(answers.engineerId);
            menu();
        })
    }

function internQues() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'What is the name of your employee?',
            },
            {
                name: 'id',
                type: 'input',
                message: 'What is the id number of your employee?',
            },
            {
                name: 'email',
                type: 'input',
                message: 'What is the email for your employee?',
            },
            {
                name: 'school',
                type: 'input',
                message: 'What school does the employee currently attend?',
            },
        ])
        .then((answers) => {
            console.log(answers)
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamList.push(intern);
            idArray.push(answers.internId);
            menu();
        })
}

function buildTeam() {
    const generateTemplate = template();
    fs.writeFile('index.html', generateTemplate, 'utf-8', (err) => err ?
        console.log(err) :
        console.log('Successfully created Team!'))
}                    
