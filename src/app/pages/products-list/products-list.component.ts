import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    
    <div class="p-8 grid grid-cols-2 gap-4 ">
      @for (product of products(); track product.id) 
        {
          <app-product-card [product]="product"/>
        }
    </div>
  `,
  styles: ``
})
export class ProductsListComponent 
{
  products= signal<Product[]>([
    {
      id:1,
      title: "Product 1",
      image: "https://toptenmartltd.com/wp-content/uploads/2024/09/Formal-shirt.jpg",
      price: 100,
      stock: 2
    },
    {
      id:2,
      title: "Product 2",
      image: "https://toptenmartltd.com/wp-content/uploads/2022/06/web1-34.jpg",
      price: 100,
      stock: 1
    },
    {
      id:3,
      title: "Product 3",
      image: "https://toptenmartltd.com/wp-content/uploads/2022/06/1.jpg",
      price: 100,
      stock: 0
    },
    {
      id:4,
      title: "Product 4",
      image: "https://toptenmartltd.com/wp-content/uploads/2022/10/web1-19.jpg",
      price: 100,
      stock: 10
    }
  ])
}
