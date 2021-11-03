const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


function generateTemplate(team){
    console.log(team);
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
    </head>
    
    <body>
    
        <div class="jumbotron jumbotron-fluid" style="background-color: darkred; color: white; text-align: center;">
            <div class="container">
                <h1 class="display-4">My team</h1>
            </div>
        </div>
    
        <div class="container"></div>
    
        <div class="row">
    
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class=card-title">${team[0].getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug mr-2"></i>${team[0].getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${team[0].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${team[0].getEmail()}">${team[0].getEmail()}
                            </a></li>
                        <li class="list-group-item">Office number: ${team[0].getOfficeNumber()}"</li>
                    </ul>
                </div>
            </div>
    
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class=card-title">${team[1].getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${team[1].getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${team[1].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${team[1].getEmail()}">${team[1].getEmail()}
                            </a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${team[1].getGithub()}"
                                target="_blank" rel="">${team[1].getGithub()}</a></li>
                    </ul>
                </div>
            </div>
    
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class=card-title">${team[2].getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-graduate mr-2"></i>${team[2].getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${team[2].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${team[2].getEmail()}">${team[2].getEmail()}
                            </a></li>
                        <li class="list-group-item">School: ${team[2].getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </body>
    
    </html>`

        
}

module.exports = generateTemplate;