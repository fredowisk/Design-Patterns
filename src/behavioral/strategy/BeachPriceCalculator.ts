import PriceCalculator from "./PriceCalculator";

class BeachPriceCalculator implements PriceCalculator {
  calculate(): number {
    return 20;
  }
}

export default BeachPriceCalculator;
