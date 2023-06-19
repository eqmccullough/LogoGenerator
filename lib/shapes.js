class shape {
    constructor(text, textColor, shape, shapeColor) {
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
  
    printMetaData() {
      console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    }
  
    addComment(comment) {
      this.comments.push(comment);
    }
};

    class circle extends shape {
        constructor(shape,text, textColor, shapeColor, shape) {
          super(text, textColor, shapeColor);
          this.shape = shape;
          this.comment
          
        }
    };

    class triangle extends shape {
        constructor(shape,text, textColor, shapeColor, shape) {
          super(text, textColor, shapeColor);
          this.shape = shape;
          this.comment
          
        }
    };

    class square extends shape {
        constructor(shape,text, textColor, shapeColor, shape) {
          super(text, textColor, shapeColor);
          this.shape = shape;
          this.comment
          
        }
    };
