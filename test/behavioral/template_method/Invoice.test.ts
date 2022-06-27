import Beer from "../../../src/behavioral/template_methods/Beer";
import Invoice from "../../../src/behavioral/template_methods/Invoice";
import Item from "../../../src/behavioral/template_methods/Item";
import Water from "../../../src/behavioral/template_methods/Water";
import Whisky from "../../../src/behavioral/template_methods/Whisky";

test("should create an invoice", () => {
  const invoice = new Invoice();
  invoice.addItem(new Beer("Heineken", 10)); // 10% 1
  invoice.addItem(new Whisky("Jack Daniels", 100)); // 20% 2 0
  invoice.addItem(new Water("Santa Catarina", 5)); // 0% 0
  const taxes = invoice.getTaxes();
  expect(taxes).toBe(21);
});
