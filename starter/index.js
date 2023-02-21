const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// // array of questions for user
const questions = [
    {type: 'input',
    name: 'title',
    message: 'What is the title of your project?',},
    {type: 'input',
    name: 'installation',
    message: 'Please enter any installation instructions you would like to include:',},
    {type: 'input',
    name: 'contribution',
    message: 'Please enter any contribution guidelines you would like to include:',},
    {type: 'input',
    name: 'test',
    message: 'Please enter any test instructions you would like to include:',},
    {type: 'checkbox',
    name: 'licence',
    message: 'Please select a licence from the list below:',
choices: ["Apache License v2.0", "General Public License v3.0", "General Public License v2.0", "MIT License"]},
{type: 'input',
name: 'email',
message: 'If you would like to include your email in the questions section, please enter it now:'},
{type: 'input',
name: 'github',
message: 'If you would like to include your GitHub username in the questions section, please enter it now:'},
];


function init() {
    inquirer.prompt(questions)
    // .then((responses) => {
    //     console.log("Creating Professional README.md File...");
    //     writeToFile(".README.md", generateMarkdown({ ...responses }));
      };

      init();





// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
