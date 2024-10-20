import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';

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
    private productSvc: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addTocart(product: IProduct) {
    this.cartSvc.add(product);
    // how to navigate programtically
    this.router.navigate(['/cart'])
  }

  filterProducts(): IProduct[] {
    if (this.filter === '') {
      return this.products;
    }

    return this.products.filter((p) => p.category === this.filter);
  }
}
