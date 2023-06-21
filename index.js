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

    fs.writeFile("./lib/data.json", JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
  })

  .then(() => {
    readFile('./lib/data.json', 'utf-8')
.then((json) => {
    const shapeData = JSON.parse(json);
    // console.log(shapeData);

    if (shapeData.shape == "circle") {
        const newShape = new circle(
      shapeData.characters,
      shapeData.textColor,
      shapeData.shapeColor,
    );
    const svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n' + newShape.renderCirc() + newShape.renderText() + "</svg>";
    return writeFile('./dist/logo.svg', svg);
    } else if (shapeData.shape == "square") {
        const newShape = new square(
            shapeData.characters,
            shapeData.textColor,
            shapeData.shapeColor,
          );
          const svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n' + newShape.renderSquare() + newShape.renderText() + "</svg>";
          return writeFile('./dist/logo.svg', svg);
    } else if (shapeData.shape == "triangle") {
        const newShape = new triangle(
            shapeData.characters,
            shapeData.textColor,
            shapeData.shapeColor,
          );
          const svg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n' + newShape.renderTri() + newShape.renderText() + "</svg>";
          return writeFile('./dist/logo.svg', svg);
    }
    

    
  })
  .then(() => {
    console.log('Created logo.svg');
  });
});