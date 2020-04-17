/**
 * Complete the function bellow to use the `...rest` parameters
 * pattern to collect all the parameters it receives in an array.
 *
 * 1. create a copy of the array of parameters
 *    (search on developer.mozilla.org which array methods can be used to make a copy of an array)
 * 2. use the `reverse()` method of arrays to reverse the new array of params
 * 3. return the array of reversed arguments
 *
 * @example
 *
 * function(a, b, c)
 *
 * => c, b, a
 */
function exercise09(...rest) {
    // let copy = [...rest];
    // let copy = rest.concat();
    let copy = rest.slice();
    let reversed = copy.reverse();

    return reversed;
}

module.exports = exercise09;
