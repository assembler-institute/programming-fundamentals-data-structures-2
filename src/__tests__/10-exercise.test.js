const exercise10 = require('../10-exercise');

describe('10-exercise', () => {
    test('return the first, second and ...rest reversed params of the function', () => {
        let { first, second, rest } = exercise10(1, 2, 3, 4, 5, 6);

        expect(first).toBe(1);
        expect(second).toBe(2);
        expect(rest).toEqual([6, 5, 4, 3]);
    });
});
