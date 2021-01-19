const fs = require('fs')
const inquirer = require('inquirer')
const userLicense = require('./license.js')


const generateReadme = () =>
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title'
            },
        
            {
                type: 'input',
                message: 'Please tell us a little about your project.',
                name: 'description'
            },
        
            {
                type: 'input',
                message: 'How do you install your application?',
                name: 'installation'
            },
        
            {
                type: 'input',
                message: 'How do you use your application?',
                name: 'usage'
            },
        
            {
                type: 'list',
                name: 'license',
                message: 'Please choose a license for your project.',
                choices: [userLicense.GeneralPublicLicense, userLicense.MITLicense, userLicense.MozillaPublicLicense]
            },
        
            {
                type: 'input',
                message: 'Badges',
                name: 'badges'
            },

            {
                type: 'input',
                message: 'Who contributed to this application',
                name: 'contribute'
            },
        
            {
                type: 'input',
                message: 'Tests',
                name: 'tests'
            },
        
            {
                type: 'input',
                message: 'Questions',
                name: 'question'
            },
        ])
const userReadme = ({title, description, installation, usage, license, badges, contribute, tests, questions}) => {
    return`#${title}

    ## Description 
    ${description}
    
    ---
    
    ## Table of Contents
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Badges](#badges)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    
    ---
    
    ## Installation
    ${installation}
    
    ---
    
    ## Usage 
    ${usage}
    
    ---
    
    ## License
    Licensed under the [${license}](license)
    
    ---
    
    ## Badges
    ${badges}
    
    ---
    
    ## Contributing
    ${contribute}
    
    ---
    
    ## Tests
    ${tests}
    
    ---
    
    ## Questions
    ${questions}
    `
}

generateReadme().then((answers) => fs.writeFile(`README.md`, userReadme(answers), err => {
    if (err) throw err;
    else {
        console.log('File Saved!')
    }
}))