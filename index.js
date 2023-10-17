const inquirer = required('inquirer');
const fs = required('fs');
const questions = require('./questions.js');
const shapes = require('./shapes.js')

function createLogo(response) {
    const svg = shapes(response);
    fs.writeFile(filename, svg, ()=> console.log('Generated logo.svg'));
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