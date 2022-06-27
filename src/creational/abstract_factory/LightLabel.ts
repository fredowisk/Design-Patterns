import Label from "./Label";

class LightLabel implements Label {
  color: string;
  constructor() {
    this.color = "black";
  }
}

export default LightLabel;
