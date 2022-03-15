const createHtml = (employees) => {

    const managerHTML = (manager) => {

        return `
       
        <div class="card column">
                <div class="card-header">
                    <h2 class="card-header-title has-background-primary-dark">Manager: ${manager.getName()}<h2>
                </div>
                <div class="card-content">
                    <p class="content m-2 box has-text-black">ID: ${manager.getId()}</p>
                    <p class="content m-2 box has-text-black"><a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a></p>
                    <p class="content m-2 box has-text-black"> Office Number: ${manager.getOfficeNumber()}</P>
                </div>
        </div>
        `
    };

    const engineerHTML = (engineer) => {

        return `
       
        <div class="card column">
            <div class="card-header">
                <h2 class="card-header-title has-background-link-dark">Engineer: ${engineer.getName()}<h2>
            </div>
            <div class="card-content">
                <p class="content m-2 box has-text-black">ID: ${engineer.getId()}</p>
                <p class="content m-2 box has-text-black"><a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a></p>
                <p class="content m-2 box has-text-black"><a href="https://github.com/${engineer.getGithub()}">GitHub: ${engineer.getGithub()}</a><p>
            </div>
        </div>
        `
    };

    const internHTML = (intern) => {

        return `
       
        <div class="card column">
            <div "card-header">
                <h2 class="card-header-title has-background-info-dark">Intern: ${intern.getName()}<h2>
            </div>
            <div "card-content">
                <p class="content m-2 box has-text-black">ID: ${intern.getId()}</p>
                <p class="content m-2 box has-text-black"><a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a><p>
                <p class="content m-2 box has-text-black" >School: ${intern.getSchool()}<p>
            </div>
        </div>
        `
    };
    //
    const pageHtml = [];


    pageHtml.push(employees 
        .filter(employee => employee.getRole() === 'Manager')
        .map((manager) => managerHTML(manager)));
    
    pageHtml.push(employees 
        .filter(employee => employee.getRole() === 'Engineer')
        .map((engineer) => engineerHTML(engineer))
        .join(""));

    pageHtml.push(employees 
        .filter(employee => employee.getRole() === 'Intern')
        .map((intern) => internHTML(intern))
        .join(""));


    return pageHtml.join("")
}




const generateHtml = (newData) => {


    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The best Team Builder</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./assets/css/styles.css">
    </head>
    <body>
    <h1 class="title is-1 has-text-white has-background-link-dark has-text-centered p-1">The Best Team Ever!<h1>
    <div class="container columns">${createHtml(newData)}</div>
    
    </body>
    </html>
    `
}


module.exports = generateHtml;
