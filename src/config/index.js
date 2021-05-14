require('dotenv').config();

module.exports = {
    service: {
        port: process.env.SERVICE_PORT || 3000,
    },
    database: {
        uri: process.env.DB_MONGO_URI,
    },
};
