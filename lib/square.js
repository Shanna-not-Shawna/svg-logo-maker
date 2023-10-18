const Shape = require ('./shape.js')

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
      };
      render () {
        return `
        <svg version="1.1" width="300" height="200">
        <rect width="150" height="150" fill="${this.shapeColor}" />
        <text x="70" y="95" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
      };
};

module.exports = Square;