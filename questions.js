const questions = [
        {
            type: 'list',
            name: 'shape',
            message: 'What shape do you want on your logo?',
            choices: [circle, square, triangle],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape to be?',
        },
        {
            type: 'input',
            name: 'letters',
            message: 'What 3 letters would you like on your logo?',

        },
        {
            type: 'input',
            name: 'fontColor',
            message: 'What color would you like your text to be?',
        }
    ])

    .then((answers) => {
        const svgImage = generateSVG(answers);
        const filename = `$answers.name.toLowerCase()split(' ').join('')}.json`;

        fs.writeFile('filename' + 'logo.svg', svgImage, (err) =>
            err ? console.log(err) : console.log('Successfully created .svg!'
        ));
    });

   function init() {
    inquirer    
        promptUser()
        .then((answers) => {
            generateSVG(answers);
        });


        const init = () => {
            promptUser()
              // Use writeFile method imported from fs.promises to use promises instead of
              // a callback function
              .then((answers) => writeFile('index.html', generateHTML(answers)))
              .then(() => console.log('Successfully wrote to index.html'))
              .catch((err) => console.error(err));
          };
          
          init();