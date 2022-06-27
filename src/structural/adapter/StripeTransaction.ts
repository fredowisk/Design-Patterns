class StripeTransaction {
  constructor(
    readonly code: string,
    readonly grossAmount: number,
    readonly situation: number
  ) {}
}

export default StripeTransaction;
