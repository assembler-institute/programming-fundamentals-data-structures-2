const exercise11 = require('../11-exercise');

describe('11-exercise', () => {
    test('return the smallest parameter using Math.min', () => {
        expect(exercise11(2, 5, 6, 8, 9)).toBe(2);
        expect(exercise11(11, 33, 6, 5, 7)).toBe(5);
        expect(exercise11(45, 24, 22, 55, 89)).toBe(22);
    });
});
