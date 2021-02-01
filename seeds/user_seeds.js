const { User } = require('../models');

const userData = [{
        name: 'Bjorn Longship',
        password: 'Huggan6',
        email: 'bjornthedread@viking.com'

    },
    {
        name: 'Thor Oaksen',
        password: 'Nunnan1',
        email: 'thorrocks@scandanavia.org'
    },
    {
        name: 'Borrie Julesen',
        password: 'Vigsvar3',
        email: 'borriethebad@raiding.com'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;