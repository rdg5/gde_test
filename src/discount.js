function calculateDiscount(price, percent) {
    if (percent < 0 || percent > 100) {
      throw new Error("Invalid discount percentage");
    }
    return price - (price * percent) / 100;
  }
  module.exports = { calculateDiscount };