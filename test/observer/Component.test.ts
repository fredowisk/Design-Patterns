import InputText from "../../src/behavioral/observer/InputText";
import Label from "../../src/behavioral/observer/Label";

test("Should create a reative component", () => {
  const inputText = new InputText("country");
  const label1 = new Label("País: {{country}}");
  const label2 = new Label("Country: {{country}}");
  inputText.register(label1);
  inputText.register(label2);
  inputText.setValue("Brasil");

  expect(label1.getValue()).toBe("País: Brasil");
  expect(label2.getValue()).toBe("Country: Brasil");
});
