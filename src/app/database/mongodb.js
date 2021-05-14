/* eslint-disable no-console */
const mongoose = require('mongoose');
const config = require('../../config');
const DBStatusAdapter = require('../adapters/DBStatusAdapter');

const { uri } = config.mongoDB;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => {
        console.log('Database status:', DBStatusAdapter.adapt(mongoose.connection.readyState));
    })
    .catch((error) => {
        console.log('Connection database error');
        throw new Error(error);
    });

mongoose.Promise = global.Promise;
