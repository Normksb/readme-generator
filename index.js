// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'projectTitle'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    const getReadmeDetails = inquirer.prompt(questions);
    getReadmeDetails.then(response => {
        console.log(response)
    })
}

// Function call to initialize app
init();
