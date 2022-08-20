import Landing_Page from "../../Pages/Landing_Page"
import Results_Page from "../../Pages/Results_Page"

const LandingPage = new Landing_Page
const ResultsPage = new Results_Page

describe("Search checks", () => {
      beforeEach(() => {
        cy.visit(Cypress.env('hnburl'))
        LandingPage.Acceptcookies()
      });
    
    it("Search with results", () => {
      LandingPage.Searchfield().type('vitamins{enter}', { force: true })
      ResultsPage.Productcardelement().should('have.length.greaterThan',0)
      cy.log('Results are displayed')
    });

    it("Search with no results", () => {
      LandingPage.Searchfield().type('esrgtrh{enter}', { force: true })
      ResultsPage.Noresultsmsg().should('contain.text', 'no results found')
      cy.log('No results found')
    });

});