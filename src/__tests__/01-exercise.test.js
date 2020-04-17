const exercise01 = require('../01-exercise');

describe('01-exercise', () => {
    test('use `toUpperCase()` to convert the string to uppercase', () => {
        expect(exercise01()).toBe('HELLO-WORLD');
    });
});
