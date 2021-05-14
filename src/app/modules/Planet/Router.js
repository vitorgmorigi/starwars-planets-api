const router = require('express').Router();
const { adapt } = require('../../adapters/ExpressRouterAdapter');

const {
    listPlanetsController,
} = require('../../../container').cradle;

router.get(
    '/',
    adapt(listPlanetsController),
);

module.exports = router;
