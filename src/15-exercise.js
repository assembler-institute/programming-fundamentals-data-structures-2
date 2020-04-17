/**
 * Complete the function bellow to destructure from the `person` parameter
 * that it receives (it’s an object).
 *
 * 1. Use destructuring to capture the `streetName` as a variable.
 *
 * 2. The variable should also have a default value of `Default Street Name`
 *    if the property doesn’t exist in the `address` nested object.
 *
 * 3. The `address` nested object should have a default value of `{}`
 *    if the object doesn’t exist in the `person` parameter object.
 *
 * 4. Return the variable with the street name from the function.
 *
 * The `person` object that is received as a parameter has the following structure:
 *
 * NOTE:
 *
 * The function might be called without a `streetName` or `address` object
 * so your solution should still work without those properties
 * on the person object.
 *
 * let person = {
 *    firstName: 'string',
 *    larstName: 'string',
 *    address: {
 *        streetName: 'string',
 *        postalCode: number,
 *    },
 * };
 */

function exercise15(person) {
    let { address: { streetName = 'Default Street Name' } = {} } = person;

    return streetName;
}

module.exports = exercise15;
