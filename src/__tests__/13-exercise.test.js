const exercise13 = require('../13-exercise');

describe('13-exercise', () => {
    test('use destructuring to capture the `cityName` and add a default value', () => {
        let city = {
            cityName: 'Barcelona',
            people: 400000,
        };

        expect(exercise13(city)).toBe(city.cityName);
        expect(exercise13({})).toBe('Default City Name');
    });
});
