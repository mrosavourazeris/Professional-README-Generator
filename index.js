const fs = require('fs')
const questionsForUser = require('./utils/questionsForUser')
const generateMarkdown = require('./utils/generateMarkdown')


questionsForUser().then((answers) => fs.writeFile(`README.md`, generateMarkdown(answers), err => {
    if (err) throw err;
    else {
        console.log('File Saved!')
    }
}))