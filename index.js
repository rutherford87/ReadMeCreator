//required packages
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('../ReadMeCreator/utils/generateMarkdown');


var questions =[
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the project description?'
    },
    {
      type: 'input',
      name: 'install',
      message: 'Installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage information: '
    },
    {
      type: 'input',
      name: 'github',
      message: 'GitHub username: '
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address: '
    },
    {
     type: 'list',
     name: 'license',
     message: 'What license is ',
     choices: ['MIT', 'Boost'],
    }
  ];

function writeToFile(fileName, data){
    let generate = generateMarkdown(data);
    fs.writeFile(fileName, generate, (err)=>{
    err ? console.error(err) : console.log('File has been written.')    
    })
};

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile('autoREADME.md', answers)})
    };    

init();