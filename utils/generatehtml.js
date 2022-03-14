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
    }

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
    }

    const pageHtml = [];

    pageHtml.push(employees 
        .filter(employee => employee.getRole() === 'Manager')
        .map((manager) => managerHTML(manager)));
    
    pageHtml.push(employees 
        .filter(employee => employee.getRole() === 'Engineer')
        .map((engineer) => engineerHTML(engineer))
        .join(""))


    return pageHtml.join("")
}




const generateHtml = newData => {
    //const data = JSON.parse(newData);

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
    <h1>The Best Team Ever<h1>
    <h2>${newData}<h2>
    <body>
    
    </body>
    </html>
    `;
}


module.exports = generateHtml;
module.exports = createHtml;