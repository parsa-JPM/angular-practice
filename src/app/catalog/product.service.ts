import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Keep in mind to use HttpCliend class you need to add HttpCliendModule to your module file
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    // to remove host information we made proxy.conf.json file in src and added it to
    // angular.json in development section
    return this.http.get<IProduct[]>('api/products')
  }
}
