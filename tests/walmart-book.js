var Test = require("../example-base-test-class");

module.exports = new Test({

  "Go to homepage": function (client) {
    client
      .resizeWindow(1280, 1024)
      .url("https://yougov.co.uk");
  },

  "Homepage should render properly": function (client) {
    client
        .getEl('.icon-yougov-logo');
    //homepage.getSiteURL nie dziala - dlaczego?
    //co w przypadku wielu pageobjectow w jednym tescie?

    //ogarnij base url
    //ogarnij nightwatch pageobjects
  },

  "Homepage should contain proper title": function (client) {
    client
        .assert.title('YouGov | What the world thinks');
  },

  "You should be able to search for defined string using top search input field": function (client) {
    client
        .setElValue('.main-search-wrapper .ng-untouched', 'obama')
        .getEl('.search-result-name')  //button is actually called 'btnG'
        .assert.elContainsText('.search-result-name', 'Barack Obama')
        .clickEl('.search-result-name')
      // click on barack obama - fix
      // add page objects
        .getEl('.thing-title');
  }

});