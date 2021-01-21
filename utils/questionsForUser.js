const inquirer = require('inquirer')

const questionsForUser = () =>
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
                message: 'What is the name of the gif file you want to display to show how to use this application?',
                name: 'usage'
            },

            {
                type: 'input',
                message: 'How can someone contribute to this project',
                name: 'contribute'
            },
        
            {
                type: 'input',
                message: 'Please add the link to the video of you testing this application.',
                name: 'tests'
            },
        
            {
                type: 'list',
                name: 'license',
                message: 'Please choose a license for your project.',
                choices: ['MIT', 'Mozzila', 'General Public License']
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

module.exports = questionsForUser;