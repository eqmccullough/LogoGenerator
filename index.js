const inquirer = require('inquirer');
const fs = require('fs');
const shape = require('./lib/shapes.js');



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

    var tColor = (`${data.textColor}`);
    var sColor = (`${data.shapeColor}`);
    var txt = (`${data.characters}`);
    var shpe = (`${data.shape}`);
    console.log(sColor);

    if (shpe == "circle") {
        fs.writeFile("logo.svg", circleSvg(txt,tColor,sColor), (err) =>
        err ? console.log(err) : console.log('Generated logo.svg'));
    } else if (shpe == "square") {
        fs.writeFile("logo.svg", squareSvg(txt,tColor,sColor), (err) =>
        err ? console.log(err) : console.log('Generated logo.svg'));
    } else if (shpe == "triangle") {
        fs.writeFile("logo.svg", triangleSvg(txt,tColor,sColor), (err) =>
        err ? console.log(err) : console.log('Generated logo.svg'));
    } else {}

    
  });





readFile('./package.json', 'utf-8')
.then((json) => {
    const shapeData = JSON.parse(json);
    const post = new logo(
      blogData.title,
      blogData.text,
      blogData.author,
      blogData.createdOn
    );
    const html = post.render();

    // Use return with the writeFile method which returns a promise so that another .then() can be chained that will
    // wait for writeFile to resolve.
    return writeFile('./dist/post.html', html);
  })
  .then(() => {
    // This function will only run after the asynchronous call to writeFile has resolved.
    console.log('Created post.html');
  });

















function circleSvg(text, textColor, shapeColor) {

    var svgUpdate = "";

svgUpdate+= '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n';

svgUpdate+= '<circle cx="150" cy="100" r="80" fill="'+ shapeColor + '" />\n';

svgUpdate+= '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' + textColor + '">' + text + '</text>\n';

svgUpdate+= '</svg>';

return svgUpdate;
};

function squareSvg(text, textColor, shapeColor) {

    var svgUpdate = "";

svgUpdate+= '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n';

svgUpdate+= '<rect x="50" y="0" width="200" height="200" fill="'+ shapeColor + '" />\n';

svgUpdate+= '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' + textColor + '">' + text + '</text>\n';

svgUpdate+= '</svg>';

return svgUpdate;
};

function triangleSvg(text, textColor, shapeColor) {

    var svgUpdate = "";

svgUpdate+= '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n';

svgUpdate+= '<polygon points="150,0 0,200 300,200" class="triangle" fill="'+ shapeColor + '" />\n';

svgUpdate+= '<text x="100" y="150" font-size="60" text-anchor="middle" fill="' + textColor + '">' + text + '</text>\n';

svgUpdate+= '</svg>';

return svgUpdate;
};

// console.log(svg("x","y","z"));


  