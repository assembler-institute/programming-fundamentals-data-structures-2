const exercise14 = require('../14-exercise');

describe('14-exercise', () => {
    test('use destructuring to capture the 3rd index and add a default value', () => {
        expect(exercise14(['Ana', 'Mike', 'John', 'Andrew'])).toBe('Andrew');
        expect(exercise14(['Ana', 'Mike', 'John', 'Smith', 'Pau'])).toBe(
            'Smith',
        );
        expect(exercise14(['Ana', 'Mike'])).toBe('Default Name');
    });
});
