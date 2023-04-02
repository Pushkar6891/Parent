import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  id: number = 0;
  name: string = '';
  price: number = 0;

  products: Product[];

  constructor() {
    this.id = 1;
    this.name = 'Mac Pro';
    this.price = 2000.0;

    this.products = [
      new Product(1, 'IPhone', 1000),
      new Product(2, 'Macbook', 2000),
      new Product(3, 'Air pods', 500),
    ];
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  public getProducts(): Product[] {
    return this.products;
  }

  ngOnInit(): void {}
}
