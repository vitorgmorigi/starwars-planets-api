const HttpResponse = require('../../../helpers/HttpResponse');

/**
 * @typedef {import('../useCases/ListPlanetsUseCase')} ListPlanetsUseCase
 */

class ListPlanetsController {
    /**
     * @constructor
     * @param {Object} dependencies
     * @param {ListPlanetsUseCase} dependencies.listPlanetsUseCase
     */
    constructor({ listPlanetsUseCase }) {
        this.listPlanetsUseCase = listPlanetsUseCase;
    }

    async handler() {
        const planets = await this.listPlanetsUseCase.execute();
        return HttpResponse.ok(planets);
    }
}

module.exports = ListPlanetsController;
