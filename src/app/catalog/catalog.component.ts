import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    // to navigate to other route
    private router: Router,
    // to read path params, etc
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
    // we subscribe to params cause we are changing filter param in catalog itself
    // so we want to be notifed when it's changed
    this.route.queryParams.subscribe((params)=>{
      // if it's not provided we will assign empty string
      this.filter = params['filter'] ?? '';
    })
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

    return this.products.filter((p) => p.category.toLowerCase() === this.filter.toLowerCase());
  }
}
