const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    email: 'giannirhino@yahoo.co.uk',
    password: 'demouser',
    hnburl: 'https://www.hollandandbarrett.com/',
    hnbbasketpage: 'https://www.hollandandbarrett.com/basket',
    demoSite: 'https://magento.softwaretestingboard.com/'
  },
  defaultCommandTimeout: 40000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://automationpractice.com',
  },
})
