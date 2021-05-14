const {
    asValue,
    asClass,
    createContainer,
    Lifetime,
} = require('awilix');

const cwd = `${process.cwd()}/src/app/modules`;

const formatToCamelCase = (name) => {
    const fileFirstLetter = name.charAt(0).toLowerCase();
    return `${fileFirstLetter}${name.slice(1)}`;
};

const container = createContainer();

container.loadModules([
    'Planet/PlanetSchema.js',
], {
    formatToCamelCase,
    cwd,
    resolverOptions: { register: asValue, lifetime: Lifetime.SINGLETON },
});

container.loadModules([
    'Planet/useCases/*.js',
    'Planet/controllers/*.js',
], {
    formatToCamelCase,
    cwd,
    resolverOptions: {
        register: asClass,
        lifetime: Lifetime.SINGLETON,
    },
});

module.exports = container;
