import Account from "./Account";
import Command from "./Command";

class CreditCommand implements Command {
  constructor(readonly account: Account, readonly amount: number) {}

  execute(): void {
    this.account.credit(this.amount);
  }
}

export default CreditCommand;
