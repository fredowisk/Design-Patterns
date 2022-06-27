import PayPalTransaction from "./PayPalTransaction";
import Transaction from "./Transaction";

type mapOptions = {
  [key: string]: string;
};

class PayPalTransactionAdapter implements Transaction {
  trackNumber: string;
  amount: number;
  status: string;

  constructor(readonly paypalTransaction: PayPalTransaction) {
    this.trackNumber = paypalTransaction.id.toString();
    this.amount = paypalTransaction.amount;
    this.status = this.convertStatus(paypalTransaction.status);
  }

  convertStatus(situation: string) {
    const map: mapOptions = {
      Z: "",
      P: "waiting_payment",
      S: "paid",
      F: "cancelled",
    };

    return map[situation || "Z"];
  }
}

export default PayPalTransactionAdapter;
