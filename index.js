const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions.js');
const shapes = require('./lib/shapes.js')

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