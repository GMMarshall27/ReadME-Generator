// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'project',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What kind of license should your project have?',
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command should be run to install dependencies',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
      },
      {
        type: 'input',
        name: 'usuage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
      },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err){
            return console.log(err);
        }
        console.log("Your README.md file has been created!")
    });
}
const writeFileAsync = util.promisify(writeToFile);
// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
