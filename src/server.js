const app = require('./app');
const config = require('./config');

app.listen(config.service.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${config.service.port}...`);
});
