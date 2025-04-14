const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Nincs extra beállítás, használhatod az alap spec pattern-t:
    // "cypress/e2e/**/*.cy.{js,ts,jsx,tsx}"
    baseUrl: 'http://localhost:3000', 
    // Esetleg ha a server ott megy, 
    // így a testben elég lehet pl. cy.visit('/')
  }
});