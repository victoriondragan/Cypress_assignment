import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
const cucumber = require('@badeball/cypress-cucumber-preprocessor').default


export default defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      var mocha = new Mocha({
        reporter: 'mochawesome',
        reporterOptions: {
          "charts": true,
          "overwrite": false,
          "html": false,
          "json": true,
          "reportDir": "cypress/mochawesome-report"
        },

      });

      

      
    },
      

  },








});
