/**
 * Complete the function bellow to destructure from the `city` parameter
 * that it receives (it’s an object).
 *
 * 1. Use destructuring to capture the `cityName` property
 *    from the city parameter in a variable.
 *
 * 2. The variable should also have a default value of `Default City Name`
 *    if the property doesn’t exist on the object.
 *
 * 3. Return the variable from the function.
 *
 * The `city` object that is received as a parameter has the following structure:
 *
 * let city = {
 *     cityName: 'Barcelona',
 *     people: 400000,
 * };
 */

function exercise13(city) {
    // Complete to code of the function

    let { cityName = 'Default City Name' } = city;

    return cityName;
}

module.exports = exercise13;
