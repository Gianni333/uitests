var logincredentials = require('../../fixtures/login.credentials.json')

describe("login", () => {
    it("fails to authenticate", () => {
      cy.visit("/index.php?controller=authentication&back=my-account");
      cy.get("#email").type(logincredentials.fake_email),
      cy.get("#passwd").type(logincredentials.fake_password),
      cy.get("#SubmitLogin").click(),
      cy.get("div[class='alert alert-danger']").should('be.visible'),
      cy.log('Authentication failed')
    });

    it("logs in successfully", () => {
        cy.visit("/index.php?controller=authentication&back=my-account");
        cy.get("#email").type(logincredentials.real_email),
        cy.get("#passwd").type(logincredentials.real_password),
        cy.get("#SubmitLogin").click(),
        cy.get("a[class='logout']").should('be.visible'),
        cy.log('Logout button visible')
      });

    it("logs out successfully", () => {
      cy.get("a[class='logout']").click(),
      cy.get("#SubmitLogin").should('be.visible'),
      cy.log('Login button visible')
    });
});