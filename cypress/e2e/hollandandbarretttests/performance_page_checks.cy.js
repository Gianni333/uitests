import Landing_Page from "../../Pages/Landing_Page"
import Results_Page from "../../Pages/Results_Page"
import Basket_Page from "../../Pages/Basket_Page"

const LandingPage = new Landing_Page
const ResultsPage = new Results_Page
const BasketPage = new Basket_Page

describe("Web vitals", () => {
      beforeEach(() => {
        cy.visit(Cypress.env('hnburl'))
        LandingPage.Acceptcookies()
      });
    
    it("Landing page web vitals", () => {
      LandingPage.Searchfield().should('be.visible')
      cy.log('Search field is visible')
      cy.vitals();
    });

    it("Results page web vitals", () => {
      LandingPage.Searchfield().type('vitamins{enter}', { force: true })
      ResultsPage.Productcardelement().should('have.length.greaterThan',0)
      cy.vitals();
    });

    it("Basket page web vitals", () => {
      LandingPage.Searchfield().type('vitamins{enter}',{ force: true })
      ResultsPage.Addtobasket()
      LandingPage.Basketcount().should('contain.text', 1)
      cy.visit(Cypress.env('hnbbasketpage'))
      BasketPage.Baskettitleelement().should('be.visible')
      cy.vitals();
    });
});