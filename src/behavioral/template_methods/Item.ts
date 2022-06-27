abstract class Item {
  constructor(
    readonly category: string,
    readonly description: string,
    readonly price: number
  ) {}
}

export default Item;
