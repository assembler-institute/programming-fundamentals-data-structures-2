const exercise15 = require('../15-exercise');

describe('15-exercise', () => {
    test('use json.parse to convert the data param and manipulate the data', () => {
        let persons = [
            {
                name: 'ana',
                favorites: ['apple', 'pear', 'orange'],
            },
            {
                name: 'mike',
                favorites: ['pineapple', 'apple', 'breadfruit'],
            },
            {
                name: 'louis',
                favorites: ['cantaloupe', 'pear', 'orange'],
            },
            {
                name: 'jake',
                favorites: ['cantaloupe', 'clementine'],
            },
            {
                name: 'john',
                favorites: ['cantaloupe', 'clementine', 'pineapple'],
            },
        ];

        let result = exercise15(JSON.stringify(persons));

        expect(result).toHaveLength(7);

        expect([
            'apple',
            'pear',
            'orange',
            'pineapple',
            'breadfruit',
            'cantaloupe',
            'clementine',
        ]).toEqual(expect.arrayContaining(result));
    });
});
