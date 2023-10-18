const Shape = require ('./shape.js')

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
      };
      render () {
        return `
        <svg version="1.1" width="300" height="200">
        <circle cx="150" cy="80" r="70" fill="${this.shapeColor}" />
        <text x="150" y="100" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
      };
};

module.exports = Circle;