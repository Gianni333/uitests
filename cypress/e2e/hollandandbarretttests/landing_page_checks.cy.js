import Landing_Page from "../../Pages/Landing_Page"

const LandingPage = new Landing_Page

describe("Landing page checks", () => {
      beforeEach(() => {
        cy.visit(Cypress.env('hnburl'))
        LandingPage.Acceptcookies()
      });
    
    it("Landing page checks", () => {
      LandingPage.HNBlogo().should('be.visible')
      cy.log('Holland and Barrett logo is visible')
      LandingPage.Searchfield().should('be.visible')
      cy.log('Search field is visible')
      LandingPage.Herosection().should('be.visible')
      cy.log('Hero section is visible')
      LandingPage.AppQRdetails().should('be.visible')
      cy.log('App QR details are visible')
      
    });
});