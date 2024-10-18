import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  // we don't use pricate modifier cause we need this variable in html file
  // same reason for filter
  products: IProduct[] = [];
  filter: String = '';

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService
  ) {}

  ngOnInit(): void {
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addTocart(product: IProduct) {
    this.cartSvc.add(product);
  }

  filterProducts(): IProduct[] {
    if (this.filter === '') {
      return this.products;
    }

    return this.products.filter((p) => p.category === this.filter);
  }
}
