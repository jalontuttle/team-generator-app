
function generateTemplate(team){
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
    
        <div class="container">${generateTemplate(team)}</div>
    
        <div class="row">
    
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class=card-title">${manager.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug mr-2"></i>${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}
                            </a></li>
                        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}"</li>
                    </ul>
                </div>
            </div>
    
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class=card-title">${engineer.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}
                            </a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}"
                                target="_blank" rel="">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
    
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class=card-title">${intern.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-graduate mr-2"></i>${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}
                            </a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </body>
    
    </html>`

        
}

module.exports = generateTemplate;