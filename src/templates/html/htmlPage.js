const Card = require('./card');


// Main HTML template, creates a component for each staff member in the array using the map method
const htmlPage = (staff) =>{
    console.log(staff,'here')
    return (
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${staff[0].name.toUpperCase()}'s TEAM</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <h1>${staff[0].name.toUpperCase()}'s TEAM</h1>
        </header>
        <main class="container">
            <section class="card-container">
                ${staff.map(employee=>{
                    return Card(employee)
                }).join('\n')}
            </section>
        </main>
    </body>
</html>`
)}

module.exports = htmlPage;