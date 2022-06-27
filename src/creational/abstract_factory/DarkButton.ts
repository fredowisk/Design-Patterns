import Button from "./Button";

class DarkButton implements Button{
  color: string;
  backgroundColor: string;

  constructor() {
    this.color = "blue";
    this.backgroundColor = "white";
  }
}

export default DarkButton; 