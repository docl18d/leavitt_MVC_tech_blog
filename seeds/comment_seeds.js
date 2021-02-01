const { Comment } = require('../models');

const commentData = [{
        comment: "Viking boats the kracken lack the table viking ocean scandinavia swords berserker. Swords loot axes tall blond women, scandinavia boats berserker raiding berserker terror viking viking scandinavia bjorn the chair.",
        user_id: 1,
        post_id: 1
    },
    {
        comment: "kea lack the table axes raiding Beowulf boats swords viking. Horns longship berserker terror, longship lack the table skald sea boats axes bork bork bork.",
        user_id: 2,
        post_id: 2
    },
    {
        comment: "Axes lack the table axes ikea bjorn the chair Beowulf bjorn the chair viking ikea, Leif Erikson loot horns loot. Berserker bjorn the chair ocean, swords scandinavia tall blond women sea longship berserker ocean boats swords bjorn the chair viking. Lack the table the kracken skald sea berserker longship Beowulf horns. Longship sea the kracken bork bork bork ocean scandinavia the kracken lack the table axes. Bork bork bork skald ocean tall blond women the kracken longship, terror boats horns sailing berserker ikea skald.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;