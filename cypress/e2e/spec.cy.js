describe("E2E test for products", () => {
    it("Visits homepage and fetches products from db", () => {
        cy.visit("http://localhost:3000/")
        cy.contains("h1", "Products")
        cy.get("#fetchBtn").click()
        cy.get("#productList li").should("have.length", 2)
    })    
})