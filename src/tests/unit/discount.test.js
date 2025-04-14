const { calculateDiscount } = require('../../discount')

describe("Calculate discount unit test", () => {
    test("If total is 100, it retuns 90 for 10% discount", () => {
        const result = calculateDiscount(100,10)
        expect(result).toBe(90)
    })

    test("Throws an error if price is over 100", () => {
        expect(() => calculateDiscount(100, 200 )).toThrow("Invalid discount percentage")
    })
})