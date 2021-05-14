/**
 * @typedef {import('../planetRepository')} planetRepository
 */

class ListPlanetsUseCase {
    /**
     * @param {Object} dependencies
     * @param {PlanetRepository} dependencies.planetRepository
     */
    constructor({ planetRepository }) {
        this.planetRepository = planetRepository;
    }

    /**
     * @returns {Promise}
     */
    async execute() {
        return this.planetRepository.getAll();
    }
}

module.exports = ListPlanetsUseCase;
