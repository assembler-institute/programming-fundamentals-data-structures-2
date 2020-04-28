const exercise17 = require('../17-exercise');

describe('17-exercise', () => {
    test('return an array of non duplicate values without null values', () => {
        let persons = [
            {
                name: 'ana',
                favorites: ['apple', null, 'grapefruit'],
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
                favorites: ['apple', 'pear', null],
            },
        ];

        let result = exercise17(JSON.stringify(persons));

        expect(result).toHaveLength(4);

        expect(['apple', 'pear', 'grapefruit', 'orange']).toEqual(
            expect.arrayContaining(result),
        );
    });
});
