import { Component, OnInit } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  private cart: IProduct[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    //The subscribe() method takes an object with a next function
    //(part of the observer pattern in RxJS). This next function is called
    //whenever the Observable emits a new value (in this case, the cart data).
    this.cartService.getCart().subscribe({
      next: (cart) => (this.cart = cart),
    });
  }

  // cartItems is the name of the getter. It's not a function you call directly (like cartItems()),
  //  but rather, it behaves like a property when accessed.
  //  The code using this getter will call it like this: someObject.cartItems.
  // The getter allows the retrieval of the cart array (which is likely a private or protected property) from outside the class.
  // return this.cart:
  // this.cart refers to a property (likely an array) that holds the cart items inside the class. The getter simply returns this cart array.
  // By using the getter, you're providing a way to retrieve the current state of the cart from outside the class, but you are still controlling access to it.
  get cartItems() {
    return this.cart;
  }

  // In Angular, when the underlying data (in this case, the cart array) changes,
  // Angular's change detection mechanism automatically triggers re-evaluation of expressions
  // or getter methods in the template that rely on the changed data. In this case, cartTotal
  // is a getter, so it will re-compute the total every time this.cart is modified,
  // ensuring that the total reflects the latest cart state.
  get cartTotal() {
    // Purpose of reduce(): The reduce() method is used to apply a function to each element of an array and accumulate the result into a single output value. In this case, it processes each item in the cart and calculates the total price.
    // this.cart: Refers to an array that contains items (probably objects) in the shopping cart.
    // 2. (prev, next) => { ... }
    // prev: This is the accumulator that holds the total price as the function progresses through the array.
    // next: Refers to the current item in the cart that is being processed during each iteration.
    return this.cart.reduce(
      (prev, next) => {
        // next.deiscount means if it exits
        let discount =
          next.discount && next.discount > 0 ? 1 - next.discount : 1;
        return prev + next.price * discount;
      },
      // this is initial value of prev
      0
    );
  }

  removeFromCart(product: IProduct) {
    this.cartService.remove(product);
  }

  getImageUrl(product: IProduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
