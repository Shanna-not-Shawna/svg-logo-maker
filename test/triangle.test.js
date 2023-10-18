const Triangle = require('../lib/triangle.js');

describe('triangle', () => {
    it('should return logo with user choice of shape color, text, and text color', () => {
        const triangle = new Triangle('blue','TCB','white');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" width="300" height="200">
        <polygon points="100, 15 200, 200 0, 200" fill="blue" />
        <text x="100" y="125" font-size="50" text-anchor="middle" fill="white">TCB</text>
        </svg>
        `
        );
    });
});
