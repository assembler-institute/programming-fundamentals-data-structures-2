/**
 * NOTE:
 *
 * This exercise is the same as the last one with 1 difference:
 *
 * The `favorites` parameter could be `null` instead of an array,
 * and it could contain `null` values if it is not null.
 *
 * You should do the same steps as the last exercise but taking into
 * account that:
 *
 * The `favorites` property value could be `null` and that the array
 * could have `null` values that have to be excluded from the final array.
 *
 * The `persons` param could have a structure similar to the following:
 *
 * persons = [
 *     {
 *         name: 'string',
 *         favorites: ['string', null, 'string'],
 *     },
 *     {
 *         name: 'string',
 *         favorites: null,
 *     },
 *     {
 *         name: 'string',
 *         favorites: ['string', null],
 *     },
 *
 *     ...
 * ];
 *
 * The following ⬇️ is the same info from the previous exercise.
 *
 * Use `JSON.parse()` to convert the `data` param to an array of objects.
 *
 * The `data` param contains an array of objects with
 * the information about several people.
 *
 * It is sent in JSON format.
 *
 * You will have to:
 * 1. convert the `data` param to an object with `JSON.parse()`.
 *
 * 2. create an array of all the values in the `favorites` array
 *    so that the final array that you created is a single array
 *    of strings, only containing strings, not other arrays.
 *
 * 3. The array should be created using loops.
 *
 * 4. the array of strings should not have duplicate values.
 *
 * 5. return the array of strings.
 */

function exercise17(data) {
    // Complete to code of the function

    let persons = JSON.parse(data);

    let result = [];

    persons.forEach(function (person) {
        if (person.favorites !== null) {
            person.favorites.forEach(function (favorite) {
                if (favorite !== null && !result.includes(favorite)) {
                    result.push(favorite);
                }
            });
        }
    });

    return result;
}

module.exports = exercise17;
