const { calculateDiscount } = require("../discount");

describe("Unit Test - calculateDiscount", () => {
  test("10% off of 100 => 90", () => {
    const result = calculateDiscount(100, 10);
    expect(result).toBe(90);
  });

  test("Throws error if discount > 100", () => {
    expect(() => calculateDiscount(100, 200)).toThrow("Invalid discount percentage");
  });
});