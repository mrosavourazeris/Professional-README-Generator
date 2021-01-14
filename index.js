const fs = require('fs')
const inquirer = require('inquirer')


let generateReadme = () => inquirer.prompt([

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },

    {
        type: '',
        message: '',
        name: ''
    },

    {
        type: '',
        message: '',
        name: ''
    },

    {
        type: '',
        message: '',
        name: ''
    },

    {
        type: '',
        message: '',
        name: ''
    },

])