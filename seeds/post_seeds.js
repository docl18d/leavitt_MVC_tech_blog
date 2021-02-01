const { Post } = require('../models');

const postData = [{
        name: 'Bjorn Longship',
        description: 'Axes lack the table axes ikea bjorn the chair Beowulf bjorn the chair viking ikea, Leif Erikson loot horns loot. Berserker bjorn the chair ocean, swords scandinavia tall blond women sea longship berserker ocean boats swords bjorn the chair viking. Lack the table the kracken skald sea berserker longship Beowulf horns. Longship sea the kracken bork bork bork ocean scandinavia the kracken lack the table axes. Bork bork bork skald ocean tall blond women the kracken longship, terror boats horns sailing berserker ikea skald.',
        user_id: 1

    },
    {
        name: 'Thor Oaksen',
        description: 'Ikea lack the table axes raiding Beowulf boats swords viking. Horns longship berserker terror, longship lack the table skald sea boats axes bork bork bork. Ocean axes sea boats, sea sea viking longship ocean bjorn the chair sea viking. Axes loot scandinavia boats Beowulf Beowulf, ikea ocean axes Leif Erikson sea ikea axes. Bork bork bork swords viking bjorn the chair ikea loot raiding.',
        user_id: 2
    },
    {
        name: 'Borrie Julesen',
        description: 'Axes lack the table axes ikea bjorn the chair Beowulf bjorn the chair viking ikea, Leif Erikson loot horns loot. Berserker bjorn the chair ocean, swords scandinavia tall blond women sea longship berserker ocean boats swords bjorn the chair viking. Lack the table the kracken skald sea berserker longship Beowulf horns. Longship sea the kracken bork bork bork ocean scandinavia the kracken lack the table axes. Bork bork bork skald ocean tall blond women the kracken longship, terror boats horns sailing berserker ikea skald..',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;