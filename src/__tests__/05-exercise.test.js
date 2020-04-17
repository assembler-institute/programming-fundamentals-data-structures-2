const exercise05 = require('../05-exercise');

describe('05-exercise', () => {
    test('remove the empty spaces and change the - character to _', () => {
        expect(exercise05()).toBe('my_name_is_alex');
    });
});
