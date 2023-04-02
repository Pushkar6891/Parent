import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public products: Array<Product> = [
    {id: 1, name: 'IPhone 13', description: 'Think Different', price: 799.0, isAvailable: true, launchDate: new Date()},
    {id: 2, name: 'Samsung S21', description: 'Do what you cannot', price: 699.0, isAvailable: true, launchDate: new Date()},
    {id: 3, name: 'Oneplus 9RT', description: 'Geared for Greatness', price: 609.0, isAvailable: true, launchDate: new Date()},
    {id: 4, name: 'Google Pixel 6', description: 'Dont be evil', price: 599.0, isAvailable: false, launchDate: new Date()},
    {id: 5, name: 'Realme 9', description: 'Dare to Leap', price: 299.0, isAvailable: false, launchDate: new Date()}
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
