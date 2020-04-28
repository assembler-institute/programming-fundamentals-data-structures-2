/**
 * Complete the function bellow to use the `...rest` parameters to:
 *
 * 1. capture the first param
 * 2. add it to the `first` object key returned by the function
 *
 * 3. capture the `second` param
 * 4. add it to the `second` object key returned by the function
 *
 * 5. capture all the other params of the function
 * 6. store them in a new array
 * 7. reverse the params in the new array
 * 8. add the reversed array to the `rest` object key returned by the function
 *
 * @example
 *
 * function(a, b, c, d, e)
 *
 * => a, b, [c, b, e]
 *
 * @hint
 * func(a, ...rest)
 */

// Add the params to the function to capture
// the first and second param in variables
// and all the other params in an array of params.
function exercise10(first, second, ...rest) {
    // Complete to code of the function

    let reversedRest = [...rest].reverse();

    // Remove the empty strings and add the variables
    return {
        first: first,
        second: second,
        rest: reversedRest,
    };
}

module.exports = exercise10;
