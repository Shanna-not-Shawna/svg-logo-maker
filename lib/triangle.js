const Shape = require ('./shape.js')

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
      };
      render () {
        return `
        <svg version="1.1" width="300" height="200">
        <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}" />
        <text x="100" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
      };
};

module.exports = Triangle;