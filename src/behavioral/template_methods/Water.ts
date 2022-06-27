import Item from "./Item";

//Liskov Substitution Principle: Se "S" (Beer, Whisky, Water) é subclasse de "T" (Item), então os objetos do tipo "T" (Item) podem ser substituidos por objetos do tipo "S", SEM QUEBRAR O COMPORTAMENTO DO PROGRAMA.

//Interface Segregation Principle: Uma subclasse NÃO DEVE IMPLEMENTAR MÉTODOS QUE ELA NÃO PRECISA

class Water extends Item {
  constructor(readonly description: string, readonly price: number) {
    super("Water", description, price);
  }
}

export default Water;
