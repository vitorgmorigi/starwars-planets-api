const {
    asValue,
    asClass,
    createContainer,
    Lifetime,
} = require('awilix');

const cwd = `${process.cwd()}/src/app/modules`;

const container = createContainer();

container.loadModules([
    'Planet/PlanetSchema.js',
], {
    formatName: 'camelCase',
    cwd,
    resolverOptions: { register: asValue, lifetime: Lifetime.SINGLETON },
});

container.loadModules([
    'Planet/useCases/*.js',
    'Planet/controllers/*.js',
    'Planet/PlanetRepository.js',
], {
    formatName: 'camelCase',
    cwd,
    resolverOptions: {
        register: asClass,
        lifetime: Lifetime.SINGLETON,
    },
});

module.exports = container;
