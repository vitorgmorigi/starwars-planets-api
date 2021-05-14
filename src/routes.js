require('./container');
const router = require('express').Router();
const PlanetRouter = require('./app/modules/Planet/Router');

router.use('/planets', PlanetRouter);

module.exports = router;
