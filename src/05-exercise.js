/**
 * 1. Use the native `trim()` method of strings
 *    to remove the empty spaces from the string in the `base` variable
 * 2. Change the `-` to `_` using `split()` and `join()`
 * 3. Return the new string without spaces and joined with `_`
 */
function exercise02() {
    const base = '      my-name-is-alex     ';

    // Complete to code of the function

    let conv = base.trim().split('-').join('_');

    return conv;
}

module.exports = exercise02;
