describe("login", () => {
    it("fails to authenticate", () => {
      cy.visit("/index.php?controller=authentication&back=my-account");
      cy.get("#email").type("sfewfew@yahoo.com"),
      cy.get("#passwd").type("ewfewfwe"),
      cy.get("#SubmitLogin").click(),
      cy.get("div[class='alert alert-danger']").should('be.visible'),
      cy.log('Authentication failed')
    });

    it("logs in successfully", () => {
        cy.visit("/index.php?controller=authentication&back=my-account");
        cy.get("#email").type("giannirhino@yahoo.co.uk"),
        cy.get("#passwd").type("demouser"),
        cy.get("#SubmitLogin").click(),
        cy.get("a[class='logout']").should('be.visible'),
        cy.log('Logout button visible')
      });

    it("logs out successfully", () => {
      cy.get("a[class='logout']").click(),
      cy.get("#SubmitLogin").should('be.visible'),
      cy.log('Login button visible')
    });
});