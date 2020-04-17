const exercise18 = require('../18-exercise');

describe('18-exercise', () => {
    test('return an array of non duplicate values without null values', () => {
        let persons = [
            {
                name: 'ana',
                favorites: ['apple', 'pear', null],
            },
            {
                name: 'mike',
                favorites: null,
            },
            {
                name: 'louis',
                favorites: [null, 'pear', 'orange'],
            },
            {
                name: 'jake',
                favorites: null,
            },
            {
                name: 'john',
                favorites: ['apple', null, 'pear'],
            },
        ];

        let result = exercise18(JSON.stringify(persons));

        expect(result).toHaveLength(3);

        expect(['apple', 'pear', 'orange']).toEqual(
            expect.arrayContaining(result),
        );
    });
});
