const exercise15 = require('../15-exercise');

describe('15-exercise', () => {
    test('use destructuring to capture the `streetName` and return the value', () => {
        let person1 = {
            firstName: 'Ana',
            larstName: 'Smith',
            address: {
                streetName: 'Caverson St 20',
                postalCode: 25000,
            },
        };

        let person2 = {
            firstName: 'John',
            larstName: 'Snow',
            address: {
                postalCode: 25000,
            },
        };

        let person3 = {
            firstName: 'Mike',
            larstName: 'Travis',
        };

        expect(exercise15(person1)).toBe(person1.address.streetName);
        expect(exercise15(person2)).toBe('Default Street Name');
        expect(exercise15(person3)).toBe('Default Street Name');
    });
});
