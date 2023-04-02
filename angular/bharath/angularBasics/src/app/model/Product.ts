export class Product {
  public id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  public setId(id: number) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public setPrice(price: number) {
    this.price = price;
  }

  public getPrice() {
    return this.price;
  }
}
