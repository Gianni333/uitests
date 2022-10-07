import Landing_Page from "../../Pages/Landing_Page"
import Results_Page from "../../Pages/Results_Page"
import Basket_Page from "../../Pages/Basket_Page"

const LandingPage = new Landing_Page
const ResultsPage = new Results_Page
const BasketPage = new Basket_Page

describe("Accessibility Checks", () => {
      beforeEach(() => {
        cy.visit(Cypress.env('demoSite'));
        LandingPage.Subheading().should('be.visible');
        cy.injectAxe();
      });
    
    it("Full scan", () => {
      cy.checkA11y();
    });

    it("Critical and serious impacts only", () => {
      cy.checkA11y(null, {
        includedImpacts: ['critical', 'serious']
      });
    });

    it("Section scan", () => {
      cy.checkA11y('.page-footer');
    });
});