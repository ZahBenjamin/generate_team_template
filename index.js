// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const helpers = require('./src/helpers');
const template = require('./src/generateTemplate');

// const generateMarkdown = // placeholder

const questions = [
  {
    type: 'input',
    message: 'What is the  name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the  id?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is the  email?',
    name: 'email',
  },
  {
    type: 'list',
    message: 'Employee type?',
    name: 'placeholder',
    choices: [
      { value: 'Manager' },
      { value: 'Engineer' },
      { value: 'Intern' },
    ]
  },
  {
    type: 'list',
    message: 'Another employee?',
    name: 'qq',
    choices: [
      { value: 'yes' },
      { value: 'no' },
    ]
  },
];

const renderQuestions(){
  inquirer.prompt(questions);
  // if data.value = yes, return renderQuestions
  // if data.value = no, end process
}

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log('Success!');
  });
}



// Function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {

// if statements responding to employee choices
if(data.placeholder === 'Engineer'){
  inquirer.prompt()({
    type: 'input',
    message: 'github',
    name: 'github'
  })
}
    const markdown = generateMarkdown(data);
    writeToFile('index.html', markdown);
  })
};



// Function call to initialize app
init();