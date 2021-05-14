/**
 * @typedef {import('./planetSchema')} PlanetSchema
 */
class PlanetRepository {
    /**
     * @constructor
     * @param {Object} dependencies
     * @param {PlanetSchema} dependencies.planetSchema
     */
    constructor({ planetSchema }) {
        this.planetSchema = planetSchema;
    }

    getAll() {
        return this.planetSchema.find();
    }

    create(data) {
        return this.planetSchema.create(data);
    }

    destroy(id) {
        return this.planetSchema
            .findByIdAndDelete(id)
            .exec();
    }

    findById(id) {
        return this.planetSchema.findById(id);
    }

    findByName(name) {
        return this.planetSchema.findOne({ name });
    }
}

module.exports = PlanetRepository;
