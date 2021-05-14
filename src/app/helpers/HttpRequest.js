class HttpRequest {
    /**
     * @constructor
     * @param {Object} properties
     * @param {Object} [properties.headers]
     * @param {Object} [properties.params]
     * @param {Object} [properties.body]
     * @param {Object} [properties.query]
     * @param {Object} [properties.files]
     */
    constructor({
        headers, params, body, query, files,
    } = {}) {
        this.headers = headers;
        this.params = params;
        this.body = body;
        this.query = query;
        this.files = files;
    }
}

module.exports = HttpRequest;
