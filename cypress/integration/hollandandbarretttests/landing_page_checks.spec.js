import Landing_Page from "../Pages/Landing_Page"

const LandingPage = new Landing_Page

describe("Landing page checks", () => {
    before(() => {
        cy.visit(Cypress.env('hnburl'))
        LandingPage.Acceptcookies()
      });
    
    it("successfully loads address section", () => {
      LandingPage.HNBlogo().should('be.visible')
      cy.log('Holland and Barrett logo is visible')
    });
});