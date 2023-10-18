const Circle = require('../lib/circle.js');

describe('Circle', () => {
    it('should return logo with user choice of shape color, text, and text color', () => {
        const circle = new Circle('blue','TCB','white');
        expect(circle.render()).toEqual(`
        <svg version="1.1" width="300" height="200">
        <circle cx="150" cy="80" r="70" fill="blue" />
        <text x="150" y="100" font-size="70" text-anchor="middle" fill="white">TCB</text>
        </svg>
        `
        );
    });
});