/**
 * 1. Use the native `includes()` method of strings
 *    to check if the variable `sentence` includes
 *    the string `brown`.
 *
 * 2. Store the result in a variable and return it
 */
function exercise07() {
    const sentence = 'The quick brown fox jumps over the lazy dog.';

    let includes = sentence.includes('brown');

    return includes;
}

module.exports = exercise07;
