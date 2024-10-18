import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: IProduct[] = [];

  constructor(private http: HttpClient) {}

  add(product: IProduct) {
    //to have copy of products on server
    // note is without subscribe method it doesn't call to server
    this.http.post('/api/add/cart', product).subscribe(() => {
      console.log(`product ${product.name} added to cart on SERVER :)`);
    });

    this.cart.push(product);
    console.log(`product ${product.name} added to cart`);
  }
}
