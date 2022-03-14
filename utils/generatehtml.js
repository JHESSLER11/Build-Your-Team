const createHtml = (employees) => {

    const managerHTML = (manager) => {

        return `
       
        <div>
            <div>
                <h2>Manager: ${manager.getName()}<h2>
            </div>
            <div>
                <p>ID: ${manager.getId()}</p>
                <a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a>
                <p> Office number: ${manager.getOfficeNumber()}</P>
            </div>
        </div>
        `
    };

    const engineerHTML = (engineer) => {

        return `
       
        <div>
            <div>
                <h2>Engineer: ${engineer.getName()}<h2>
            </div>
            <div>
                <p>ID: ${engineer.getId()}</p>
                <a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a>
                <p><a href="https://github.com/${engineer.getGithub()}">GitHub: ${engineer.getGithub()}</a><p>
            </div>
        </div>
        `
    };

    const internHTML = (intern) => {

        return `
       
        <div>
            <div>
                <h2>Intern: ${intern.getName()}<h2>
            </div>
            <div>
                <p>ID: ${intern.getId()}</p>
                <a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a>
                <p>School: ${intern.getSchool()}<p>
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




const generateHtml = (data) => {
    console.log(employees)

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The best Team Builder</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    </head>
    <body>
    <h1>The Best Team Ever<h1>
    <h2>${createHtml(data)}<h2>
    
    </body>
    </html>
    `;
}


module.exports = generateHtml;
module.exports = createHtml;