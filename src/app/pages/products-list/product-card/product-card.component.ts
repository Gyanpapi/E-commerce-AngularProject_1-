import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 relative">
      {{product().title}}
      
        
        <div class="mx-auto">

        <img [src]= "product().image" class="w-[300px] h-[250px] object-contain" />
        </div>
        
        <div class="mx-auto">
          
          <span class="text-lg font-bold text-gray-800">Price: {{product().price}}$</span>
          
        </div>

        <div class="mx-auto">
          <span ><app-primary-button label="add to cart"/>></span>
        </div>

        <span class="absolute top-2 right-3 text-sm font-bold"
        [class]="product().stock ? 'text-green-500' : 'text-red-500'">
         
          {{product().stock ? 'In Stock' : 'Out of Stock'}}
        </span>
    </div>
  `,
  styles: ``
})
export class ProductCardComponent {

  product= input.required<Product>();

}
