const Card = require('./card');

const htmlPage = (staff) =>{
    return (
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>
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