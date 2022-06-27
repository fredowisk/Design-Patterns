import Handler from "./Handler";

class Atm {
  constructor(readonly handler: Handler) {}

  withdraw(amount: number) {
    const bills: { type: number; quantity: number }[] = [];

    this.handler.handle(bills, amount);

    return bills;
  }
}

export default Atm;
