/**
 * 1. Use one the native `map()` methods of arrays
 *    and the native `toUpperCase()` method of strings
 *    to convert every city in the array to uppercase
 * 2. Return the new array from using `map` with the strings in uppercase
 */
function exercise02() {
    const cities = ['Barcelona', 'Madrid', 'Lisbon', 'Berlin', 'Paris'];

    // Complete to code of the function

    let conv = cities.map(function (city) {
        return city.toUpperCase();
    });

    return conv;
}

module.exports = exercise02;
