const exercise02 = require('../02-exercise');

describe('02-exercise', () => {
    test('use `toUpperCase()` to convert all the city names to uppercase', () => {
        expect(exercise02()).toEqual([
            'BARCELONA',
            'MADRID',
            'LISBON',
            'BERLIN',
            'PARIS',
        ]);
    });
});
