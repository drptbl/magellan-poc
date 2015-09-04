/**
 * Created by jm on 02/09/15.
 */

var homePage = require("pageObjects/homePage.js");

module.exports = new homePage({
    tags: ['homepage'],

    before: function (client) {
        client
            .resizeWindow(1024, 768)
            .url(this.getSiteURL())
    },

    after: function (client) {
        client.end();
    },

    "Homepage should render properly": function (client) {
        client
            .getEl('.icon-yougov-logo', 5000);
        //homepage.getSiteURL nie dziala - dlaczego?
        //co w przypadku wielu pageobjectow w jednym tescie?

        //ogarnij base url
        //ogarnij nightwatch pageobjects
    },

    "Homepage should contain proper title": function (client) {
        client
            .assert.title('YouGov | What the world thinks')
    },

    "You should be able to search for defined string using top search input field": function (client) {
        client
            .setElValue('.main-search-wrapper .ng-untouched', 'obama')
            .getEl('.search-result-name', 5000)  //button is actually called 'btnG'
            .assert.containsText('.search-result-name', 'Barack Obama')
            .clickEl('.search-result-name')
            // click on barack obama - fix
            // add page objects
            .getEl('.thing-title', 5000)
    },

    "Check product description": function (client) {
        client
            .assert.elContainsText("[data-item-id='403453'] .tile-heading", "My Story")
            .assert.elContainsText("[data-item-id='403453'] .media-details", "Paperback")
    }


});