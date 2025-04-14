const request = require("supertest");
const { app, products } = require("../app");

describe("Integration Test - Express /products", () => {
  beforeEach(() => {
    products[0].price = 1000;
    products[1].price = 25;
  });

  it("GET /products => returns 2 items", async () => {
    const res = await request(app).get("/products");
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
  });

  it("POST /products/1/discount => updates price", async () => {
    const res = await request(app)
      .post("/products/1/discount")
      .send({ percent: 50 });
    expect(res.status).toBe(200);
    expect(res.body.price).toBe(500);
  });

  it("POST /products/1/discount => 400 if discount invalid", async () => {
    const res = await request(app)
      .post("/products/1/discount")
      .send({ percent: 150 });
    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({ error: "Invalid discount percentage" });
  });
});