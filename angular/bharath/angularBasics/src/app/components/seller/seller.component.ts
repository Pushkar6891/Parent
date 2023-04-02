import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent implements OnInit {
  sellers: string[];

  // Input Property Binding
  hideSellers: boolean = false;

  constructor() {
    this.sellers = ['Apple', 'BestBuy', 'Amazon'];
  }

  public getSellers(): string[] {
    return this.sellers;
  }

  // Output Event Binding
  public toggle(): void {
    this.hideSellers = !this.hideSellers;
  }

  ngOnInit(): void {}
}
