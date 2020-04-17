/**
 * 1. Use the native `split()` and `join()` methods of strings
 *    to remove the `-` from the string in the `base` variable
 * 2. Join the array using the `_` character to create a new string
 * 3. Return the new string with `-` changed to `_`
 */
function exercise02() {
    const base = 'user-first-name';

    let conv = base.split('-').join('_');

    return conv;
}

module.exports = exercise02;
