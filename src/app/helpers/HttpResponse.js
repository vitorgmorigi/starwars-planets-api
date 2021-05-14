const { Status } = require('./StatusCode');

class HttpResponse {
    /**
     * Returns an object with the appropriated properties for http response 200 Ok
     * @param {Object} [body]
     */
    static ok(body) {
        return {
            status: Status.OK,
            body,
        };
    }

    /**
    * Returns an object with the appropriated properties for http response 201 Created
    * @param {Object} [body]
    */
    static created(body) {
        return {
            status: Status.Created,
            body,
        };
    }

    /**
    * Returns an object with the appropriated properties for http response 202 Accepted
    * @param {Object} [body]
    */
    static accepted(body) {
        return {
            status: Status.Accepted,
            body,
        };
    }

    /**
    * Returns an object with the appropriated properties for http response Internal Server Error
    * @param {Object} [body]
    */
    static internalServerError(body) {
        return {
            status: Status.InternalServerError,
            body,
        };
    }

    /**
     * Returns an object with the appropriated properties for http response Not Found
     * @param {Object} [body]
     */
    static notFound(body) {
        return {
            status: Status.NotFound,
            body,
        };
    }

    /**
    * Returns an object with the appropriated properties for http response Bad Request
    * @param {Object} [body]
    */
    static badRequest(body) {
        return {
            status: Status.BadRequest,
            body,
        };
    }

    /**
    * Returns an object with the appropriated properties for http response Unauthorized
    * @param {Object} [body]
    */
    static unauthorized(body) {
        return {
            status: Status.Unauthorized,
            body,
        };
    }
}

module.exports = HttpResponse;
