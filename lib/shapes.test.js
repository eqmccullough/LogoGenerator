const {shapes, triangle, square, circle} = require('./shapes');


describe('shapes', () => {
//tests for empty logo input
  describe('invalid', () => {
    it('should return false for empty input', () => {
      const str = '';

      const result = new shapes().isInput(str);

      expect(result).toEqual(false);
    });
  });

//tests if the logo text is too long
  describe('Input Length', () => {
    it('should return false for password more than 3 characters long', () => {
      const shape2 = new shapes();
      const result = shape2.isInput('pass');

      expect(result).toEqual(false);
    });
  });

//tests if triangle class renders correct svg file content
  describe('triangle', () => {
    it('should return false if render method returns unexpected value', () => {
      const shape = new triangle();
    shape.setColor("blue");
    expect(shape.renderTri()).toEqual('<polygon points="150,0 0,200 300,200" class="triangle" fill="blue"/>');
    });
  }); 
  
  //tests if circle class renders correct svg file content
  describe('circle', () => {
    it('should return false if render method returns unexpected value', () => {
      const shape = new circle();
    shape.setColor("blue");
    expect(shape.renderCirc()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
  }); 

  //tests if square class renders correct svg file content
  describe('square', () => {
    it('should return false if render method returns unexpected value', () => {
      const shape = new square();
    shape.setColor("blue");
    expect(shape.renderSquare()).toEqual('<rect x="50" y="0" width="200" height="200" fill="blue"/>');
    });
  }); 

});