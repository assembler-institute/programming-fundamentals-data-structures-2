const exercise12 = require('../12-exercise');

describe('12-exercise', () => {
    test('return the largest parameter using Math.max', () => {
        expect(exercise12(2, 5, 6, 8, 9)).toBe(9);
        expect(exercise12(12, 33, 6, 5, 7)).toBe(33);
        expect(exercise12(45, 24, 22, 55, 89)).toBe(89);
    });
});
