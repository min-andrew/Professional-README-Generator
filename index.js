// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your title of this project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is a description of this project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for this project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information of this project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines of this project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions of this project?',
        name: 'test',
    }
];

const generateREAD = ({ title, description, installation, usage, contribution, test }) =>
    `# ${title}

## Description
${description}

## Table of Contents
* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contribution](#contribution)

* [Tests](#tests)

* [Questions](#questions)
        
## Installation
${installation}

## Usage
${usage}

## License

## Contribution
${contribution}

## Tests
${test}

## Questions
`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => err ? console.error(err) : console.log('Done'));
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
            questions
        )
        .then((response) => {
            const READinfo = (generateREAD(response));
            writeToFile('README2.md', READinfo);
        }
        );
};

// Function call to initialize app
init();