import StripeTransaction from "./StripeTransaction";
import Transaction from "./Transaction";

type mapOptions = {
  [key: number]: string;
};

class StripeTransactionAdapter implements Transaction {
  trackNumber: string;
  amount: number;
  status: string;

  constructor(readonly stripeTransaction: StripeTransaction) {
    this.trackNumber = stripeTransaction.code;
    this.amount = stripeTransaction.grossAmount;
    this.status = this.convertStatus(stripeTransaction.situation);
  }

  convertStatus(situation: number) {
    const map: mapOptions = {
      0: "",
      1: "waiting_payment",
      2: "paid",
      3: "cancelled",
    };

    return map[situation || 0];
  }
}

export default StripeTransactionAdapter;
