// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your title of this project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is a description of this project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions for this project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the usage information of this project?',
        name: 'usage'
    },
    {
        type: 'list',
        message: "Choose the license:",
        name: 'license',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BDS-2-Clause', 'BDS-3-Clause', 'BDS-4-Clause', 'none']
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines of this project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What are the test instructions of this project?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => err ? console.error(err) : console.log('Generating README...'));
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
            questions
        )
        .then((response) => {
            const READinfo = (generateMarkdown(response));
            writeToFile('README2.md', READinfo);
        }
        );
};

// Function call to initialize app
init();