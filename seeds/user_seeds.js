const { User } = require('../models');

const userData = [{
        username: 'Bjorn Longship',
        password: 'Huggan6'

    },
    {
        username: 'Thor Oaksen',
        password: 'Nunnan1'
    },
    {
        username: 'Borrie Julesen',
        password: 'Vigsvar3'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;