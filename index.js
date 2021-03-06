// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'Please provide a description for this project.',
      name: 'projectDescription',
    },
    {
      type: 'input',
      message: 'Please provide installation instructions for this project.',
      name: 'projectInstallationInstructions',
    },
    {
        type: 'input',
        message: 'Please provide usage information for this project.',
        name: 'projectUsage',
      },
      {
        type: 'input',
        message: 'Who are the contributors of this project?',
        name: 'projectContributors',
      },
      {
        type: 'input',
        message: 'Please provide test instructions for this project.',
        name: 'projectTest',
      },
      {
        type: 'checkbox',
        message: 'Please select the license type that applies to this project.',
        name: 'projectLicense',
        choices: ['MIT', 'GNU Gplv3', 'Other'],
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'projectGitUserName',
      },
      {
        type: 'input',
        message: 'Please provide a link to your github profile.',
        name: 'projectGitHubProfile',
      },
      {
        type: 'input',
        message: 'What is your email address.',
        name: 'projectEmailAddress',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, `${data.projectTitle}
    
    Description
    ${data.projectDescription}
    
    Installation Instructions
    ${data.projectInstallationInstructions}
    
    Usage Information
    ${data.projectUsage}
    
    Contributors
    ${data.projectContributors}
    
    Test Instructions
    ${data.projectTest}
    
    Project License
    ${data.projectLicense}
    
    Questions, comments, please direct to:
    ${data.projectGitUserName}
    GitHub Profile: ${data.projectGitHubProfile}
    Email Addres: ${data.projectEmailAddress}`, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    const getReadmeDetails = inquirer.prompt(questions);
    getReadmeDetails.then(projectResponses => {
        console.log(projectResponses);
//        const answersArray = Object.values(projectResponses);
//        console.log(answersArray);
        const fileName = './inquirer-generated-README.md';
        writeToFile(fileName, projectResponses);
    })
}

// Function call to initialize app
init();
