import Landing_Page from "../../Pages/Landing_Page"
import Results_Page from "../../Pages/Results_Page"
import Basket_Page from "../../Pages/Basket_Page"

const LandingPage = new Landing_Page
const ResultsPage = new Results_Page
const BasketPage = new Basket_Page

describe("Basket checks", () => {
      beforeEach(() => {
        cy.visit(Cypress.env('hnburl'))
        LandingPage.Acceptcookies()
      });
    
    it("Add to basket successfully", () => {
      LandingPage.Searchfield().type('vitamins{enter}', { force: true })
      ResultsPage.Addtobasket()
      LandingPage.Basketcount().should('contain.text', 1)
      cy.log('1 item added to basket')
    });

    it("Basket page checks", () => {
      LandingPage.Searchfield().type('vitamins{enter}',{ force: true })
      ResultsPage.Addtobasket()
      LandingPage.Basketcount().should('contain.text', 1)
      cy.visit(Cypress.env('hnbbasketpage'))
      BasketPage.Baskettitleelement().should('be.visible')
      cy.log('Basket page title is visible')
      BasketPage.Productdetailsection().should('be.visible')
      cy.log('Product details section is visible')
      BasketPage.Totalpriceelement().should('be.visible')
      cy.log('Total price is displayed')
      BasketPage.Paymentlogos().should('be.visible')
      cy.log('Payment logos are displayed')
    });

});