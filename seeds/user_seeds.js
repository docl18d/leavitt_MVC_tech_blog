const { User } = require('../models');

const userData = [{
        name: 'Bjorn Longship',
        password: 'Huggan6'

    },
    {
        name: 'Thor Oaksen',
        password: 'Nunnan1'
    },
    {
        name: 'Borrie Julesen',
        password: 'Vigsvar3'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;