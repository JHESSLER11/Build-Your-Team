const createHtml = (employees) => {

    const managerHTML = (manager) => {

        return `
        <div class="row">
        <div class="col s12 m6">
        <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${manager.getName()}</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="mailto:${manager.getEmail()}">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
    </div>
        `
    }

    const something = [];

    something.push(employees 
        .filter(employee => employee.getRole() === 'Manager')
        .map((manager) => managerHTML(manager)))

    return something.join("")
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