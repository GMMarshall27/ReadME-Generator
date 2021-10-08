// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const markDown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input


const questions = [
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
      name: 'title',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ["MIT",  "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
      },
  ];


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
async function init() {
    try{
       const answers =  await inquirer.prompt(questions);
       const  readMe = markDown(answers);
       await writeFileAsync('./utils/README.md', readMe);
    } catch (err){
        console.log(err);
}
};
// Function call to initialize app
init();
