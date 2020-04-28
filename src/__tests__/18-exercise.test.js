const exercise18 = require('../18-exercise');

describe('18-exercise', () => {
    test('return an array in json format of cleaned-up user data', () => {
        let users = [
            {
                name: 'ana maria',
                paid: true,
                email: '   ANA@mail.COm',
            },
            {
                name: 'john smith',
                paid: false,
                email: '   jOhn@MAil.COM',
            },
            {
                name: 'alex smith',
                paid: true,
                email: '  ALex@MAil.COM    ',
            },
            {
                name: 'andrew park',
                paid: false,
                email: 'andrew@MAil.COM    ',
            },
        ];

        let json;
        let object;

        try {
            json = exercise18(JSON.stringify(users));
            object = JSON.parse(json);
        } catch (error) {}

        expect(json).toEqual(expect.any(String));
        expect(object).toEqual([
            {
                firstName: 'ana',
                lastName: 'maria',
                email: 'ana@mail.com',
                paid: true,
            },
            {
                firstName: 'alex',
                lastName: 'smith',
                email: 'alex@mail.com',
                paid: true,
            },
        ]);
    });
});
