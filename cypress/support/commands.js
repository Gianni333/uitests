///<reference types='Cypress' />

import "cypress-web-vitals";

Cypress.Commands.add('login', () => { 
    cy.visit("/index.php?controller=authentication&back=my-account");
        cy.get("#email").type(Cypress.env('email')),
        cy.get("#passwd").type(Cypress.env('password')),
        cy.get("#SubmitLogin").click(),
        cy.get("a[class='logout']").should('be.visible'),
        cy.log('Logout button visible')
});

Cypress.Commands.add('logout', () => {
        cy.get("a[class='logout']").click(),
        cy.get("#SubmitLogin").should('be.visible'),
        cy.log('Login button visible')
})
