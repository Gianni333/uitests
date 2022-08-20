class BasketPage {

    Baskettitleelement() {
        return cy.get('.basket-title')
    }

    Productdetailsection() {
        return cy.get('.product')
    }

    Totalpriceelement() {
        return cy.get('[data-test="price-total"]').scrollIntoView()
    }

    Paymentlogos() {
        return cy.get('[data-test="payment-cards"]').scrollIntoView()
    }

}
export default BasketPage