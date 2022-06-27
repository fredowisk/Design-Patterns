import TaxItem from "./TaxItem";

class Whisky extends TaxItem {
  constructor(readonly description: string, readonly price: number) {
    super("Whisky", description, price);
  }

  getTax(): number {
    return 20;
  }
}

export default Whisky;
