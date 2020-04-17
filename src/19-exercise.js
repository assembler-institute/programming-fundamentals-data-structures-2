/**
 *
 * You will have to return an array in JSON format of the following data:
 *
 * The function will receive an array of users in JSON format
 *
 * You will have to:
 *
 * 1. json parse the `data` param to get an array of objects
 * 2. create a new array of objects with the information about each user
 *    in the `data` array so that:
 *
 *    2.1 if the user has the property of `paid` set to false,
 *        you will have to skip the user from the final array of users.
 *
 *        Only include the users with the property of: `paid: true`
 *
 *    2.2 user should have their name split in `firstName` and `lastName`.
 *
 *        The user you receive will have their name as a
 *        full name under the `name` property.
 *        name: 'ana maria' => firstName: 'ana', lastName: 'maria'
 *
 *    2.3 you will have to use `trim()` and `toLowerCase()`
 *        on the email property so that it doesn’t have empty spaces
 *        on each side and its written in lower case.
 *        '      UseR@EmaIl.COM   ' => 'user@email.com'
 *
 *    2.4 if the `address` property is not included in the user object,
 *        you will have to add it with the value of `null`
 *        `address: null`
 *
 *    2.5 if the user has the property of `address` you will
 *        have to copy it to preserve the address.
 *
 * 3. return the array of objects of users in JSON format with `JSON.stringify`
 *
 * The `data` parameter you receive has the following structure:
 *
 * users = [
 *    {
 *        name: 'string string',
 *        paid: true,
 *        email: '   ANA@mail.COm',
 *    },
 *    {
 *        name: 'string string',
 *        paid: false,
 *        email: '   NAmE@MAil.COM',
 *        address: null,
 *    },
 *    {
 *        name: 'string string',
 *        paid: true,
 *        email: '  NamE@MAil.COM    ',
 *        address: null,
 *    },
 *    {
 *        name: 'string string',
 *        paid: true,
 *        email: 'NAME@MAil.COM    ',
 *        address: {
 *            street: 'Baker st 20',
 *        },
 *    },
 * ];
 *
 * The final `result` should have the following structure
 * in JSON format:
 *
 * result = [
 *    {
 *        firstName: 'string',
 *        lastName: 'string',
 *        paid: true,
 *        email: 'name@mail.com',
 *        address: null
 *    },
 *    {
 *        firstName: 'string',
 *        lastName: 'string',
 *        paid: true,
 *        email: 'name@mail.com',
 *        address: {
 *            street: 'string',
 *        },
 *    },
 *
 *   ...
 *
 * ];
 */

function exercise19(data) {
    // Complete to code to the function
    let users = JSON.parse(data);

    let filtered = users.filter((user) => user.paid === true);

    let result = filtered.map((user) => {
        let [firstName, lastName] = user.name.split(' ');

        // let address;

        // if (user.hasOwnProperty('address') && user.address !== null) {
        //     // if ('address' in user && user.address !== null) {
        //     address = { ...user.address };
        //     // address = Object.assign({}, user.address);
        // } else {
        //     address = null;
        // }

        return {
            firstName: firstName,
            lastName: lastName,
            email: user.email.trim().toLowerCase(),
            paid: user.paid,
            // address: address,
            address: user.address ? { ...user.address } : null,
            // address: user.address ? Object.assign({}, user.address) : null,
        };
    });

    // console.log({ users });
    // console.log({ filtered });
    // console.log(result);

    return JSON.stringify(result);
}

module.exports = exercise19;
