const request = require('supertest')
const { app, products } = require("../../app")

describe("REST API Integration tests", () => {

    it("GET /products returns two elements and 200 status", async () => {
       const response = await request(app).get("/products")
       expect(response.status).toBe(200)
       expect(response.body).toHaveLength(2)
    })

    it("POST /products/1/discount updates the price", async () => {
        const response = await request(app)
        .post("/products/1/discount")
        .send({percent: 50})
        expect(response.status).toBe(200)
        expect(response.body.price).toBe(500)
    })
})