const { readFile, writeFile } = require('fs/promises');
const inquirer = require('inquirer');
const fs = require('fs');
const {triangle,square, circle} = require('./lib/shapes');

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

    fs.writeFile("package.json", JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
  })

  .then(() => {
    readFile('./package.json', 'utf-8')
.then((json) => {
    const shapeData = JSON.parse(json);
    // console.log(shapeData);

    if (shapeData.shape == "circle") {
        const newShape = new circle(
      shapeData.characters,
      shapeData.textColor,
      shapeData.shapeColor,
    );
    const svg = newShape.renderCirc();
    return writeFile('./dist/logo.svg', svg);
    } else if (shapeData.shape == "square") {
        const newShape = new square(
            shapeData.characters,
            shapeData.textColor,
            shapeData.shapeColor,
          );
          const svg = newShape.renderSquare();
          return writeFile('./dist/logo.svg', svg);
    } else if (shapeData.shape == "triangle") {
        const newShape = new triangle(
            shapeData.characters,
            shapeData.textColor,
            shapeData.shapeColor,
          );
          const svg = newShape.renderTri();
          return writeFile('./dist/logo.svg', svg);
    }
    

    // Use return with the writeFile method which returns a promise so that another .then() can be chained that will
    // wait for writeFile to resolve.
    
  })
  .then(() => {
    // This function will only run after the asynchronous call to writeFile has resolved.
    console.log('Created logo.svg');
  });
});