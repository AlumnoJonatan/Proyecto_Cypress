//const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeight: 900,
  chromeWebSecurity:false,
  pageLoadTimeout:15000, //Definir el tiempo de carga(15 segundos)
  defaultCommandTimeout:15000, //Definir 15 segundos por comandos
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //on('file:preprocessor',cucumber())
    },
    //specPattern: "cypress/e2e/*.feature",
  },
});
