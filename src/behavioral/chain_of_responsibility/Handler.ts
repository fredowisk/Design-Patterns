interface Handler {
  handle(bills: { type: number; quantity: number }[], amount: number): void;
}

export default Handler;
