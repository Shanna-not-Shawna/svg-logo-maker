const colorKeywords = require('./colorKeywords')

const questions = [
        {
            type: 'list',
            name: 'shape',
            message: 'What shape do you want on your logo?',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape to be?',
            // when: (answer) => {
            //     if(answer.shapeColorChoice === 'color keyword') {
            //         return true;
            //     }
            //     return false;
        },
            // validate: (answer) => {
            //     let answerLowercase = answer.toLowerCase();
            //     for(var i = 0, len = colorKeywords.length; i < len; ++i) {
            //         if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
            //             return true;
            //         }}
            //         return console.log("\n Please enter a valid color")
            // }
        // },
        {
            type: 'input',
            name: 'text',
            message: 'What 3 letters would you like on your logo?',
            // validate: (answer) => {
            //     if (answer.length > 3) {
            //         return console.log("\n Text must be three characters or less! Please try again");
            //     }
            //     return true;
            },

        // },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like your text to be?',
            // when: (answer) => {
            //     let answerLowercase = answer.toLowerCase();
            //     for(var i = 0, len = colorKeywords.length; i < len; ++i) {
            //     if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
            //         return true;
            //     }}
            //     return console.log("\n Please enter a valid color")
            }
        // }
    ];

    module.exports = questions;
//     .then((answers) => {
//         const svgImage = generateSVG(answers);
//         const filename = `$answers.name.toLowerCase()split(' ').join('')}.json`;

//         fs.writeFile('filename' + 'logo.svg', svgImage, (err) =>
//             err ? console.log(err) : console.log('Successfully created .svg!'
//         ));
//     });

//    function init() {
//     inquirer    
//         promptUser()
//         .then((answers) => {
//             generateSVG(answers);
//         });


//         const init = () => {
//             promptUser()
//               // Use writeFile method imported from fs.promises to use promises instead of
//               // a callback function
//               .then((answers) => writeFile('index.html', generateHTML(answers)))
//               .then(() => console.log('Successfully wrote to index.html'))
//               .catch((err) => console.error(err));
//           };
          
//           init();