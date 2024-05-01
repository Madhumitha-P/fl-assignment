const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/e2e/*.feature",
    env:{
      contacts_url: 'https://www.founderandlightning.com/contact'
    }
  }
});
