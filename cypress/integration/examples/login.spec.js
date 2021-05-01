describe("login", () => {
    it("logs in successfully", () => {
        cy.visit("/index.php?controller=authentication&back=my-account");
        cy.get("#email").type("giannirhino@yahoo.co.uk"),
        cy.get("#passwd").type("demouser"),
        cy.get("#SubmitLogin").click(),
        cy.get("a[class='logout']").should('be.visible'),
        cy.log('Logout button visible')
      });
});