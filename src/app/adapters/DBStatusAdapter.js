class DBStatusAdapter {
    /**
       *
       * @param {Number} state
       * @return {String}
    */

    static adapt(state) {
        const status = [
            'disconnected',
            'connected',
            'connecting',
            'disconnecting',
        ];

        return status[state];
    }
}

module.exports = DBStatusAdapter;
