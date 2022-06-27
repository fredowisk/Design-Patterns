import Account from "./Account";
import Command from "./Command";

class DebitCommand implements Command {
  constructor(readonly account: Account, readonly amount: number) {}

  execute(): void {
    this.account.debit(this.amount);
  }
}

export default DebitCommand;
