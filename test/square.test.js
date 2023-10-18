const Square = require('../lib/square.js');

describe('Square', () => {
    it('should return logo with user choice of shape color, text, and text color', () => {
        const square = new Square('blue','TCB','white');
        expect(square.render()).toEqual(`
        <svg version="1.1" width="300" height="200">
        <rect width="150" height="150" fill="blue" />
        <text x="70" y="95" font-size="70" text-anchor="middle" fill="white">TCB</text>
        </svg>
        `
        );
    });
});

        