const router = require('express').Router();
//importing html and api routes
const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');

//defining route paths for html and api routes
router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;