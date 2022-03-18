class LandingPage {
    Acceptcookies() {
        return cy.get('#cookie-consent-accept').click()
    }

    HNBlogo() {
        return cy.get('.Desktop-module--container--v4ZJU > .Logo-module--logoOuter--F8TpR > a > .Logo-module--logo--bFI-R > .Logo-module--mono--Yv9av > svg')
    }

}
export default LandingPage