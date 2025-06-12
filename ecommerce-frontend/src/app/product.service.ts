import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> { return this.http.get(`${this.baseUrl}/products/`); }
  getCart(): Observable<any>     { return this.http.get(`${this.baseUrl}/cart/`); }
  addToCart(item: any): Observable<any> { return this.http.post(`${this.baseUrl}/cart/`, item); }
  updateCartItem(id: number, item: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/cart/${id}/`, item);
  }
  deleteCartItem(id: number): Observable<any> { return this.http.delete(`${this.baseUrl}/cart/${id}/`); }
}
