/**
 * NOTE:
 *
 * This exercise is the same as the last one with 1 difference:
 *
 * The `favorites` array parameter could be `null` instead of an array.
 *
 * You should do the same steps as the last exercise but taking into
 * account that:
 *
 * The `favorites` property value could be `null`.
 *
 * The `persons` param could have a structure similar to the following:
 *
 * persons = [
 *     {
 *         name: 'string',
 *         favorites: ['string', "string", 'string'],
 *     },
 *     {
 *         name: 'string',
 *         favorites: null,
 *     },
 *     {
 *         name: 'string',
 *         favorites: ['string', "string"],
 *     },
 *
 *     ...
 * ];
 *
 * The following ⬇️ is the same info as the previous exercise.
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

function exercise16(data) {
    // Complete to code of the function
}

module.exports = exercise16;
