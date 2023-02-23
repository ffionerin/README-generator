const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
        {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your application:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation instructions you would like to include:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter any contribution guidelines you would like to include:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter any test instructions you would like to include:',
    },
        {
        type: 'input',
        name: 'link',
        message: 'Please enter the link to your deployed website:',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license from the list below:',
        choices: licenseChoices
    },
    {
        type: 'input',
        name: 'email',
        message: 'If you would like to include your email in the questions section, please enter it now:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'If you would like to include your GitHub username in the questions section, please enter it now:'
    },
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile("myREADME.md", generateMarkdown({ ...inquirerResponses }));

    });
}

// function call to initialize program
init();
