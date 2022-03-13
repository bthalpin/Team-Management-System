const fs = require('fs');

const createFile = (fileName,fileContent,successMessage,isJSON) => {
    if(isJSON)fileContent = JSON.stringify([fileContent]);
    
    fs.writeFile(fileName,fileContent,err=>{
        err?console.log(err):console.log(successMessage);
    })
}

module.exports = {
    createFile
}