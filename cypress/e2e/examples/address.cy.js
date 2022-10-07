const faker = require('faker');

let randomEmail = faker.internet.email();
let  randomPassword = faker.internet.password();

describe("address section", () => {
    before(() => {
        cy.login()
      });
    
      after(() => {
        cy.logout()
    })
    
    it("successfully loads address section", () => {
      cy.visit("/index.php?controller=addresses");
      cy.get('h1').should(($h1) => {
        expect($h1).to.contain('My addresses')
        });
      cy.log('On my addresses page')
    });

    /*it("edits address successfully", () => {
      cy.visit("/index.php?controller=addresses");
      cy.get("a[title='Update']").click(),
      cy.get("p[class='info-title']").should.contain('Modify address'),
      cy.log('On edit address page')
    });*/

});