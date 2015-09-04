/**
 * Created by jm on 02/09/15.
 */

var Helpers = require("testarmada-magellan-nightwatch/lib/base-test-class");
var util = require("util");

var homePage = function (steps) {
    // call super-constructor
    Helpers.call(this, steps);
};

util.inherits(homePage, Helpers);

homePage.prototype = {
    before: function (client) {
        // call super-before
        Helpers.prototype.before.call(this, client);
    },

    after: function (client, callback) {
        // call super-after
        Helpers.prototype.after.call(this, client, callback);
    },

    getSiteURL: function () {
        return "https://yougov.co.uk/";
    }
};

module.exports = homePage;