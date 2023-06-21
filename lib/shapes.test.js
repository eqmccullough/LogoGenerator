const {shapes, triangle, square, circle} = require('../lib/shapes');


// TODO: Describe a testing suite for checking the functionality of the Validate class.

describe('shapes', () => {
  // TODO: Write a test that asserts that isPassword() returns false when passed an empty string.

  describe('invalid', () => {
    it('should return false for empty input', () => {
      const str = '';

      const result = new shapes().isInput(str);

      expect(result).toEqual(false);
    });
  });


  describe('Input Length', () => {
    it('should return false for password more than 3 characters long', () => {
      const shape2 = new shapes();
      const result = shape2.isInput('pass');

      expect(result).toEqual(false);
    });
  });


  describe('triangle', () => {
    it('should return false if render method returns unexpected value', () => {
      const shape = new triangle();
    shape.setColor("blue");
    expect(shape.renderTri()).toEqual('<polygon points="150,0 0,200 300,200" class="triangle" fill="blue"/>');
    });
  }); 
  
  describe('circle', () => {
    it('should return false if render method returns unexpected value', () => {
      const shape = new circle();
    shape.setColor("blue");
    expect(shape.renderCirc()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
  }); 
  describe('square', () => {
    it('should return false if render method returns unexpected value', () => {
      const shape = new square();
    shape.setColor("blue");
    expect(shape.renderSquare()).toEqual('<rect x="50" y="0" width="200" height="200" fill="blue"/>');
    });
  }); 

});