const exercise16 = require('../16-exercise');

describe('16-exercise', () => {
    test('use destructuring to return the data from the person param', () => {
        let person1 = {
            firstName: 'Mark',
            lastName: 'John',
            favorites: ['apple', 'pear', 'orange'],
            friends: [
                {
                    id: 10000,
                    email: 'frank@mail.com',
                },
                {
                    id: 10001,
                    email: 'alex@mail.com',
                },
            ],
        };

        let person2 = {
            firstName: 'Mike',
            lastName: 'Smith',
            favorites: ['orange', 'pineapple'],
            friends: [
                {
                    id: 10000,
                    email: 'maria@mail.com',
                },
                {
                    id: 10001,
                    email: 'mark@mail.com',
                },
            ],
        };

        expect(exercise16(person1).fullName).toBe('Mark John');
        expect(exercise16(person1).secondFavorite).toBe('pear');
        expect(exercise16(person1).emails).toEqual([
            'frank@mail.com',
            'alex@mail.com',
        ]);

        expect(exercise16(person2).fullName).toBe('Mike Smith');
        expect(exercise16(person2).secondFavorite).toBe('pineapple');
        expect(exercise16(person2).emails).toEqual([
            'maria@mail.com',
            'mark@mail.com',
        ]);
    });
});
