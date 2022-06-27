import Button from "./Button";

class LightButton implements Button {
  color: string;
  backgroundColor: string;

  constructor() {
    this.color = "black";
    this.backgroundColor = "blue";
  }
}

export default LightButton;