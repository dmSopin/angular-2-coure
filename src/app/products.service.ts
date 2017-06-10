import { Injectable } from '@angular/core';
import { Product } from './product.model'

@Injectable()
export class ProductsService {

  constructor() { }

  products: Product[] = [
    {id: 0, name: 'TV', price: 2000},
    {id: 1, name: 'Phone', price: 1500},
  ];


  getProducts(): Array<Product> {
    return this.products;
  }

  clearProductsList() :void {
    this.products = [];
  }
}
