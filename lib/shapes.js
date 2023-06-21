class shapes {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
//function used to test render functions
    setColor = (color) => {
        this.shapeColor = color;
      };
};

class square extends shapes {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor); 
    }
    renderSquare() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>`;
      };
      renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
      };
    
};

    

    class triangle extends shapes {
        constructor(text, textColor, shapeColor) {
          super(text, textColor, shapeColor); 
        }
        renderTri() {
            return `<polygon points="150,0 0,200 300,200" class="triangle" fill="${this.shapeColor}"/>`;
          };
        renderText() {
            return `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
          };
     
        
    };

    class circle extends shapes {
        constructor(text, textColor, shapeColor) {
          super(text, textColor, shapeColor);
        }
        renderCirc() {
            return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
          };
          renderText() {
            return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
          };
     
    };

          shapes.prototype.isInput = (input) => {
            // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
          if(input == ""){
            return false;
          }
            if (input.length > 3) {
              return false;
            }
          };
          
        

    module.exports = {shapes, circle, square, triangle};



