/**
 * 1. Use the native `slice()` method of strings to get
 *    the substring `brown fox` from the variable `sentence`
 *
 * 2. Store the result in a variable and return it
 */
function exercise08() {
    const sentence = 'The quick brown fox jumps over the lazy dog.';

    let slice = sentence.slice(10, 19);

    return slice;
}

module.exports = exercise08;
