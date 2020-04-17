/**
 * NOTE:
 *
 * This exercise is the same as the last one with 2 differences:
 *
 * 1. The `favorites` parameter could be `null` instead of an array.
 * 2. The `favorites` array could contain `null` values.
 *
 * You should do the same steps as the last exercise but taking into
 * account that:
 *
 * 1. the `favorites` property value could be `null`.
 * 2. the `favorites` array could have `null` values that
 *    have to be excluded from the final array.
 *
 * The `persons` param would have the following structure:
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

/**
 * TIP:
 * use console.log to inspect the object to understand the data you are receiving
 */
function exercise18(data) {
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

module.exports = exercise18;
