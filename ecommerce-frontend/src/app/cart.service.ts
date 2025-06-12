import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = 'https://ecommerce-project-3m0g.onrender.com/api';
  constructor(private http: HttpClient) {}

cart: any[] = [];

addToCart(product: any) {
  const existingItem = this.cart.find(item => item.product.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1; // or any logic to update quantity
  } else {
    this.cart.push({ product: product, quantity: 1 });
  }
}
}
