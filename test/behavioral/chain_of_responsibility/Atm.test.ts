import Atm from "../../../src/behavioral/chain_of_responsibility/Atm";
import BillHandler from "../../../src/behavioral/chain_of_responsibility/BillHandler";

test("should withdraw the money from cash machine", () => {
  const handler1 = new BillHandler(undefined, 1);
  const handler5 = new BillHandler(handler1, 5);
  const handler10 = new BillHandler(handler5, 10);
  const handler20 = new BillHandler(handler10, 20);
  const handler50 = new BillHandler(handler20, 50);
  const handler100 = new BillHandler(handler50, 100);
  const atm = new Atm(handler100);
  const bills = atm.withdraw(978);
  expect(bills).toStrictEqual([
    { type: 100, quantity: 9 },
    { type: 50, quantity: 1 },
    { type: 20, quantity: 1 },
    { type: 10, quantity: 0 },
    { type: 5, quantity: 1 },
    { type: 1, quantity: 3 },
  ]);
});

test("should withdraw the money from cash machine using only a specific bill type", () => {
  const handler1 = new BillHandler(undefined, 1);
  const atm = new Atm(handler1);
  const bills = atm.withdraw(978);
  expect(bills).toStrictEqual([{ type: 1, quantity: 978 }]);
});
