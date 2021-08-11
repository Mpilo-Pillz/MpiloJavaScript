function signUp({email, password, dateOfBirth, city, username}) {
    //create new user
}

const user = {
    username: 'pillz',
    password: 'thulani',
    email: 'dlamini@nikita.com',
    dateOfBirth: '1/2/3456',
    city: 'PTA',
}

signUp(user);

////using the above destructuring means we do not have to worry about the order of the arguments
const points = [
    [7, 8],
    [9, 0]
];

points.map(pair => {
    const x = pair[0];
    const y = pair[1];

    const [x, y] = pair;
});

points.map(([x, y]) => {
    return { x: x, y: y};
    return { x, y};
});