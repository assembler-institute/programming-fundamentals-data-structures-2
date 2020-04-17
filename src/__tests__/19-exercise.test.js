const exercise19 = require('../19-exercise');

describe('19-exercise', () => {
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
                address: null,
            },
            {
                name: 'alex smith',
                paid: true,
                email: '  ALex@MAil.COM    ',
                address: null,
            },
            {
                name: 'andrew park',
                paid: true,
                email: 'andrew@MAil.COM    ',
                address: {
                    street: 'Baker St. 20',
                },
            },
        ];

        let json;
        let object;

        try {
            json = exercise19(JSON.stringify(users));
            object = JSON.parse(json);
        } catch (error) {}

        expect(json).toEqual(expect.any(String));
        expect(object).toEqual([
            {
                firstName: 'ana',
                lastName: 'maria',
                email: 'ana@mail.com',
                paid: true,
                address: null,
            },
            {
                firstName: 'alex',
                lastName: 'smith',
                email: 'alex@mail.com',
                paid: true,
                address: null,
            },
            {
                firstName: 'andrew',
                lastName: 'park',
                email: 'andrew@mail.com',
                paid: true,
                address: { street: 'Baker St. 20' },
            },
        ]);
    });
});
