import PriceCalculator from "./PriceCalculator";

class ShoppingPriceCalculator implements PriceCalculator {
  calculate(hour: number): number {
    return hour * 10;
  }
}

export default ShoppingPriceCalculator;
