import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../Models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsFromDB: Product[] = [];

  constructor(private productService: ProductService){ }

  getProducts():void{
    this.productService.getProducts().subscribe((result: Product[]) => { this.productsFromDB = result; });
  }
  
  ngOnInit():void{
    this.getProducts();
  }
}

