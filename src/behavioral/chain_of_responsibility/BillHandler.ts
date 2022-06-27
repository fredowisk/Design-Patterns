import Handler from "./Handler";

class BillHandler implements Handler {
  constructor(readonly next: Handler | undefined, readonly type: number) {}

  handle(bills: { type: number; quantity: number }[], amount: number): void {
    const quantity = Math.floor(amount / this.type);
    bills.push({ type: this.type, quantity: quantity });
    const remaining = amount % this.type;
    if (this.next) return this.next.handle(bills, remaining);
    if (remaining > 0) throw new Error("Not enough bills for this amount!");
  }
}

export default BillHandler;
