const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'characters',
      message: 'Type up to 3 characters for your logo',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text to be? Enter a color keyword or hexidecimal number',
    },
    {
      type: 'list',
      message: 'What shape would you like to include in your logo?',
      name: 'shape',
      choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want the shape to be? Enter a color keyword or hexidecimal number',
    },
  ])
  .then((data) => {
    const filename = `${data.characters.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

  
  