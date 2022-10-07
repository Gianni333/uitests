const faker = require('faker');

let randomEmail = faker.internet.email();
let  randomPassword = faker.internet.password();

describe("Personal Information section", () => {
    before(() => {
        cy.login()
      });
    
      after(() => {
        cy.logout()
    })
    
    it("successfully loads personal information section", () => {
      cy.visit("/index.php?controller=identity");
      cy.get('h1').should(($h1) => {
        expect($h1).to.contain('Your personal information')
        });
      cy.log('On personal information section')
    });

});