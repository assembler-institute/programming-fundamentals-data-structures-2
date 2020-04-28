/**
 * 1. Use the native `split()` method of strings
 *    to remove the `-` from the string in the `base` variable
 * 2. Return the new array of strings without the `-` character
 */
function exercise02() {
    const base = 'Susan-Mark-Snow-John-Frank';

    // Complete to code of the function

    let conv = base.split('-');

    return conv;
}

module.exports = exercise02;
