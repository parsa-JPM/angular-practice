import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  // the ! symbol after a variable or property is called the non-null assertion operator. It is used to tell the
  // TypeScript compiler that you are confident a particular variable or property is not null or undefined,
  // even though TypeScript might think it could be.
  @Input() product!: IProduct;
  @Output() buyEvent = new EventEmitter();

  buyBtnClicked(){
    // we don't need to send product object cause we already have it in catalog foreach.
   this.buyEvent.emit();
  }

  discountedStyle(product: IProduct) {
    if (product.discount > 0) {
      return 'strikethrough';
    }

    return '';
  }
}
