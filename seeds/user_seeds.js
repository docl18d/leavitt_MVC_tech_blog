const { User } = require('../models');

const userData = [{
        username: 'Bjorn Longship',
        password: 'jkohn'

    },
    {
        username: 'Thor Oaksen',
        password: 'jake'
    },
    {
        username: 'Borrie Julesen',
        password: 'joe'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;