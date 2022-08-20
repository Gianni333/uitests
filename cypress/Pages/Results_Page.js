class ResultsPage {

    Productcardelement() {
        return cy.get('[data-test="product-card"]')
    }

    Noresultsmsg() {
        return cy.get('.inner > :nth-child(1) > .Heading-module--heading--2pnHW')
    }

    Addtobasket() {
        return cy.get('[data-test="quick-add"]').first().click()
    }

}
export default ResultsPage