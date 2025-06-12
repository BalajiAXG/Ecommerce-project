import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  constructor(private ps: ProductService) {}
  ngOnInit() {
    this.ps.getProducts().subscribe((data) => (this.products = data));
  }
  addToCart(product: any) {
    this.ps.getCart().subscribe((cartItems) => {
      const existingItem = cartItems.find(
        (item: any) => item.product.id === product.id
      );

      if (existingItem) {
        const updatedItem = {
          product_id: product.id,
          quantity: existingItem.quantity + 1,
        };

        this.ps
          .updateCartItem(existingItem.id, updatedItem)
          .subscribe(() => {});
      } else {
        const newItem = {
          product_id: product.id,
          quantity: 1,
        };

        this.ps.addToCart(newItem).subscribe(() => {});
      }
    });
  }
}
