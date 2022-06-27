import Account from "../../../src/behavioral/command/Account";
import CreditCommand from "../../../src/behavioral/command/CreditCommand";
import DebitCommand from "../../../src/behavioral/command/DebitCommand";

test("should create a bank account", () => {
  const account = new Account();
  const balance = account.getBalance();
  expect(balance).toBe(0);
});

test("should credit an account", () => {
  const account = new Account();
  account.credit(100);
  const balance = account.getBalance();
  expect(balance).toBe(100);
});

test("should debit an account", () => {
  const account = new Account();
  account.credit(100);
  account.debit(50);
  const balance = account.getBalance();
  expect(balance).toBe(50);
});

test("should credit an account using a command", () => {
  const account = new Account();
  const creditCommand = new CreditCommand(account, 100);
  creditCommand.execute();
  const balance = account.getBalance();
  expect(balance).toBe(100);
});

test("should debit an account using a command", () => {
  const account = new Account();
  const creditCommand = new CreditCommand(account, 100);
  const debitCommand = new DebitCommand(account, 50);
  creditCommand.execute();
  debitCommand.execute();
  const balance = account.getBalance();
  expect(balance).toBe(50);
});
