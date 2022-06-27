import TaxItem from "./TaxItem";

class Beer extends TaxItem {
  constructor(readonly description: string, readonly price: number) {
    super("Beer", description, price);
  }

  getTax(): number {
    return 10;
  }
}

export default Beer;
