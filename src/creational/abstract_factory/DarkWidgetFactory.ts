import Button from "./Button";
import Label from "./Label";
import DarkButton from "./DarkButton";
import DarkLabel from "./DarkLabel";
import WidgetFactory from "./WidgetFactory";

class DarkWidgetFactory implements WidgetFactory {
  createLabel(): Label {
    return new DarkLabel();
  }
  createButton(): Button {
    return new DarkButton();
  }
}

export default DarkWidgetFactory;
