import PriceCalculator from "./PriceCalculator";

class AirportPriceCalculator implements PriceCalculator {
  calculate(hour: number): number {
    let totalPrice = 20;

    if (hour > 3) totalPrice += (hour - 3) * 10;

    return totalPrice;
  }
}

export default AirportPriceCalculator;
