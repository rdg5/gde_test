describe("E2E Test", () => {
    it("Visits homepage, fetches products", () => {
      cy.visit("http://localhost:3000"); 
      cy.contains("h1", "Products");
      cy.get("#fetchBtn").click();
      cy.get("#productList li").should("have.length", 2);
    });
  });