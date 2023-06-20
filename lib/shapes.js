class shapes {
    constructor(text, textColor, shapeColor) {
        if (text.length > 3) {
            throw new Error('`text` must contain no more than 3 characters.');
          }

        if (!/[a-z][a-z0-9_]{2,}/i.test(text)) {
            throw new Error(`Invalid text "${text}"`);
        }

      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\
        </svg>
        `;
};
};

class square extends shapes {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor); 
    }
    renderSquare() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\
        </svg>
        `;
      };
};

    

    class triangle extends shapes {
        constructor(text, textColor, shapeColor) {
          super(text, textColor, shapeColor); 
        }
        renderTri() {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,0 0,200 300,200" class="triangle" fill="${this.shapeColor}"/>
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
            `;
          };
    };

    class circle extends shapes {
        constructor(text, textColor, shapeColor) {
          super(text, textColor, shapeColor);
        }
        renderCirc() {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
            `;
          };
          };




    module.exports = {circle, square, triangle};