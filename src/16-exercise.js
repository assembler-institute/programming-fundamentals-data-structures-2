/**
 * Learn how to use destructuring.
 *
 * 1. destructure the `firstName` and `lastName` keys from the `person` param
 * 2. concatenate the first name and last name with an empty space in between the names
 * 3. and store it in a variable as a full name.
 *
 * 4. get the `favorites` array from the `person` param using destructuring
 *    and destructure the second element from the `favorites` array
 *    to store it in a variable.
 *
 *    Skip the first 2 elements in the array and capture the third element
 *    in a variable named `third`
 *
 *    @example
 *    let [ , , third ] = ["ana", "mike", "alex"]; => third equals: "alex"
 *
 * 5. get the `friends` array from the `person` param using destructuring
 *    and use a native looping function such as `forEach` or `map` (choose the one you want)
 *    to create an array of the emails from the `friends` array ["email1@mail.com", ...]
 *
 * 6. return an object from the function with the following data:
 *
 * key: `fullName`
 * value: the firstname and last name of the person concatenated with an empty string
 * @example: "Ana Maria"
 *
 * key: `secondFavorite`
 * value: the second element destructured from the `favorites` array
 * @example: "orange"
 *
 * key: `emails`
 * value: array of emails destructured from the `friends` array
 * @example: ["email1@mail.com", "email2@mail.com"]
 *
 * @example
 * return {
 *     fullName: 'string',
 *     secondFavorite: 'string',
 *     emails: ['string','string'],
 * };
 *
 * The function bellow will receive an object
 * in the `person` parameter which has the
 * following structure:
 *
 * let person = {
 *     firstName: 'string',
 *     lastName: 'string',
 *     favorites: ['string', 'string', 'string'],
 *     friends: [
 *         {
 *             id: number,
 *             email: 'string',
 *         },
 *         {
 *             id: number,
 *             email: 'string',
 *         },
 *     ],
 * };
 */

function exercise16(person) {
    // let {
    //   firstName,
    //   lastName,
    //   favorites: [, secondFavorite],
    //   friends,
    // } = person;

    let { firstName, lastName, favorites, friends } = person;
    let [, secondFavorite] = favorites;

    let fullName = firstName + ' ' + lastName;

    let emails = friends.map(function (friend) {
        return friend.email;
    });

    return {
        fullName: fullName,
        secondFavorite: secondFavorite,
        emails: emails,
    };
}

module.exports = exercise16;
