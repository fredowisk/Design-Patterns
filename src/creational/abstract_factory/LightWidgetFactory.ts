import Button from "./Button";
import Label from "./Label";
import LightButton from "./LightButton";
import LightLabel from "./LightLabel";
import WidgetFactory from "./WidgetFactory";

class LightWidgetFactory implements WidgetFactory {
  createLabel(): Label {
    return new LightLabel();
  }
  createButton(): Button {
    return new LightButton();
  }
}

export default LightWidgetFactory;
