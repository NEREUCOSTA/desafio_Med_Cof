const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    'baseUrl': 'http://www.grupomedcof.com.br/',
    viewportHeight: 660,
		viewportWidth: 1000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

