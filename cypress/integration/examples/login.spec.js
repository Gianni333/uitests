///<reference types='Cypress' />
const faker = require('faker');

let randomEmail = faker.internet.email();
let  randomPassword = faker.internet.password();

describe("login", () => {
    it("fails to authenticate", () => {
      cy.visit("/index.php?controller=authentication&back=my-account");
      cy.get("#email").type(randomEmail),
      cy.get("#passwd").type(randomPassword),
      cy.get("#SubmitLogin").click(),
      cy.get("div[class='alert alert-danger']").should('be.visible')
      cy.log('Authentication failed')
    });

    it("logs in successfully", () => {
        cy.visit("/index.php?controller=authentication&back=my-account");
        cy.get("#email").type(Cypress.env('email')),
        cy.get("#passwd").type(Cypress.env('password')),
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