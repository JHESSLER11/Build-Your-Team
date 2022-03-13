



const generateHtml = newData => {
    JSON.parse(newData);

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