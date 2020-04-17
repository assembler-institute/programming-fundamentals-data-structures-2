const exercise09 = require('../09-exercise');

describe('09-exercise', () => {
    test('return the ...args of the function reversed', () => {
        expect(exercise09(1, 2, 3, 4)).toEqual([4, 3, 2, 1]);
        expect(exercise09('hello', 'world', 'test')).toEqual([
            'test',
            'world',
            'hello',
        ]);
    });
});
