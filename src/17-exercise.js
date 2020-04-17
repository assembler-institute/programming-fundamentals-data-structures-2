/**
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
 *
 * The `persons` param has the following structure:
 *
 * persons = [
 *     {
 *         name: 'string',
 *         favorites: ['string', 'string', 'string'],
 *     },
 *     {
 *         name: 'string',
 *         favorites: ['string', 'string', 'string'],
 *     },
 *     {
 *         name: 'string',
 *         favorites: ['string', 'string'],
 *     },
 *
 *     ...
 * ];
 */

/**
 * TIP:
 * use console.log to inspect the object to understand the data you are receiving
 */
function exercise17(data) {
    let persons = JSON.parse(data);

    let result = [];

    persons.forEach(function (person) {
        person.favorites.forEach(function (favorite) {
            if (!result.includes(favorite)) {
                result.push(favorite);
            }
        });
    });

    return result;
}

module.exports = exercise17;
