const exercise03 = require('../03-exercise');

describe('03-exercise', () => {
    test('use `split()` to remove the - characters', () => {
        expect(exercise03()).toEqual([
            'Susan',
            'Mark',
            'Snow',
            'John',
            'Frank',
        ]);
    });
});
