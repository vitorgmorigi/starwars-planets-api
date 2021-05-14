const HttpRequest = require('../helpers/HttpRequest');

/** @typedef {import('express').RequestHandler} RequestHandler */

class ExpressRouterAdapter {
    /**
     * Adapts the controller to Express request handler
     * @param {Object} controller
     * @param {Function} controller.handler
     * @returns {RequestHandler}
     */
    static adapt(controller) {
        return async (req, res, next) => {
            try {
                const httpRequest = new HttpRequest({
                    headers: req.headers,
                    params: req.params,
                    body: req.body,
                    query: req.query,
                });
                const httpResponse = await controller.handler(httpRequest);
                res.status(httpResponse.status).json(httpResponse.body);
            } catch (err) {
                next(err);
            }
        };
    }
}

module.exports = ExpressRouterAdapter;
