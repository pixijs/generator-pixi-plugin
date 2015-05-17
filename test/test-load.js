var assert = require('assert');

describe('browserify module generator', function () {
    it('can be imported without blowing up', function () {
        var app = require('../generators/app');
        assert(app !== undefined);
    });
});
