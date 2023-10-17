const Circle = required('./lib/circle.js');
const Square = required('./lib/square.js');
const Triangle = required('./lib/triangle.js');

function makeShape.js(response) {

    if (response.shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Square') {
        let userShape = new Square (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Triangle') {
        let userShape = new Triangle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
};

module.exports = makeShape;