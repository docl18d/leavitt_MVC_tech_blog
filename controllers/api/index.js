const router = require('express').Router();
const userRoutes = require('./userRoutes');
const entryRoutes = require('./postRoutes');

router.use('/user', userRoutes);
router.use('/post', entryRoutes);

module.exports = router