/**
 * Complete the function bellow to destructure from the `names` parameter
 * that it receives (it’s an array of names).
 *
 * 1. Use destructuring to capture the value at the index
 *    number 3 (starting with index 0) in a variable.
 *
 * 2. The variable should also have a default value of `Default Name`
 *    if the index doesn’t exist in the array.
 *
 * 3. Return the variable from the function.
 *
 * The `names` array that is received as a parameter has the following structure:
 *
 * let names = ["string", "string", "string", ...];
 */

function exercise14(names) {
    let [, , , name = 'Default Name'] = names;

    return name;
}

module.exports = exercise14;
