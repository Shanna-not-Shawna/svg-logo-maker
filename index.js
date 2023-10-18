const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions.js');
const setShape = require('./setShape.js')
const fileName = "./examples/logo.svg";
// `$answers.name.toLowerCase()split(' ').join('')}.json`;

function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

function init() {
    inquirer
    .prompt(questions)
    .then(response => {
        createLogo(response);
    })
    .catch(err => {
        console.log(err)
    });
}

init();