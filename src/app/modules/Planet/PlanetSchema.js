const mongoose = require('../../database/mongodb');

const { Schema } = mongoose;

const PlanetSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        climate: {
            type: String,
            required: true,
        },
        ground: {
            type: String,
            required: true,
        },
        movieAppearances: [{
            type: String,
            required: true,
        }],
    },
    { versionKey: false },
);

const Planet = mongoose.model('Planet', PlanetSchema);

module.exports = Planet;
