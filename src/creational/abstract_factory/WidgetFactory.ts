import Button from "./Button";
import Label from "./Label";

interface WidgetFactory {
  createLabel(): Label;
  createButton(): Button;
}

export default WidgetFactory;
