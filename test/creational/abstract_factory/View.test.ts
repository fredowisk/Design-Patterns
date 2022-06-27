import DarkWidgetFactory from "../../../src/creational/abstract_factory/DarkWidgetFactory";
import LightWidgetFactory from "../../../src/creational/abstract_factory/LightWidgetFactory";
import View from "../../../src/creational/abstract_factory/View";

test("should create a light graphic interface", () => {
  const view = new View(new LightWidgetFactory());
  expect(view.label.color).toBe("black");
  expect(view.button.color).toBe("black");
  expect(view.button.backgroundColor).toBe("blue");
});

test("should create a dark graphic interface", () => {
  const view = new View(new DarkWidgetFactory());
  expect(view.label.color).toBe("white");
  expect(view.button.color).toBe("blue"); 
  expect(view.button.backgroundColor).toBe("white");
});
