const exercise16 = require('../16-exercise');

describe('16-exercise', () => {
    test('return an array of non duplicate values and check for null arrays', () => {
        let persons = [
            {
                name: 'ana',
                favorites: ['apple', 'pear', 'grapefruit'],
            },
            {
                name: 'mike',
                favorites: null,
            },
            {
                name: 'louis',
                favorites: ['apple', 'pear', 'orange'],
            },
            {
                name: 'jake',
                favorites: null,
            },
            {
                name: 'john',
                favorites: ['pear', 'grapefruit'],
            },
        ];

        let result = exercise16(JSON.stringify(persons));

        expect(result).toHaveLength(4);

        expect(['apple', 'pear', 'grapefruit', 'orange']).toEqual(
            expect.arrayContaining(result),
        );
    });
});
