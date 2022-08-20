class LandingPage {
    Acceptcookies() {
        return cy.get('#cookie-consent-accept').click()
    }

    HNBlogo() {
        return cy.get('.Desktop-module--container--v4ZJU > .Logo-module--logoOuter--F8TpR > a > .Logo-module--logo--bFI-R > .Logo-module--mono--Yv9av > svg')
    }

    Searchfield() {
        return cy.get('[data-test="search-form"] > [data-test="search-input"]').filter(':visible')
    }

    Herosection() {
        return cy.get('.HomeHero-module--container--kzwfu')
    }

    Paymentlogos() {
        return cy.get('.FooterLogos-module--paymentList--xFAO- > ul')
    }

    Socialmediaicons() {
        return cy.get('.FooterLogos-module--socialList--LbDx4 > ul')
    }

    AppQRdetails() {
        return cy.get('.FooterAppDetails-module--appRow--GspCb')
    }

    Basketcount() {
        return cy.get('[data-test="basket-count"]')
    }

}
export default LandingPage