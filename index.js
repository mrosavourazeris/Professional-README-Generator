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
                type: 'input',
                message: 'How can someone contribute to this project',
                name: 'contribute'
            },
        
            {
                type: 'input',
                message: 'How can you test your application',
                name: 'tests'
            },
        
            {
                type: 'list',
                name: 'license',
                message: 'Please choose a license for your project.',
                choices: [userLicense.GeneralPublicLicense, userLicense.MITLicense, userLicense.MozillaPublicLicense]
            },
        
            {
                type: 'list',
                name: 'badges',
                message: 'Please choose the license you picked so the badge can be added as well.',
                choices: [userLicense.GeneralPublicBadge, userLicense.MITBadge, userLicense.MozillaBadge]
            },

            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'GitUsername'
            },

            {
                type: 'input',
                message: 'Please add your GitHub URL',
                name: 'GitHubURL'
            },

            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email'
            },

        ])
const userReadme = ({title, description, installation, usage, contribute, tests, license, badges, GitUsername, GitHubURL, email}) => {
    return`# ${title}
${badges}

## Description 
${description}

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)


---

## Installation
${installation}

---

## Usage 
${usage}


---

## Contributing
${contribute}

---

## Tests
${tests}

---

## Questions
My GitHub username is: ${GitUsername}
\nYou can find my GitHub profile by clicking this link: [My GitHub Profile](${GitHubURL})
\nIf you have any questions you can email me at: [My Email](${email})


---

## License
Licensed under 
\n${license}
`
}

generateReadme().then((answers) => fs.writeFile(`README.md`, userReadme(answers), err => {
    if (err) throw err;
    else {
        console.log('File Saved!')
    }
}))