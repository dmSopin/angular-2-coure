import { Component } from '@angular/core';
import { CategoriesEnum } from './categoriesEnum';
import { ProductsService } from './products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private ProductsService: ProductsService) { }

  name: string = 'Product Name';
  description: string = 'Product Description';
  price: number = 50;
  category = CategoriesEnum;
  isAvailable: boolean = true;
  ingredients: Array<string> = ['ingredient1', 'ingredient2', 'ingredient3'];
  isBasketEmpty: boolean = false;

  onBuy(): void {
    this.isBasketEmpty = true;
  }

  needShowBasket(): boolean {
    return this.isBasketEmpty;
  }

  getProducts() {
    return this.ProductsService.getProducts();
  }

  removeAllProducts(): void {
    this.ProductsService.clearProductsList();
  }
}
