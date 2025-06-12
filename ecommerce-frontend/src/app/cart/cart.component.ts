import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  constructor(private ps: ProductService) {}
  ngOnInit() { this.ps.getCart().subscribe(data => this.cart = data); }
  update(item: any) {
    const updated = { product_id: item.product.id, quantity: item.quantity };
    this.ps.updateCartItem(item.id, updated).subscribe();
  }
  remove(id: number) {
    this.ps.deleteCartItem(id).subscribe(() => {
      this.cart = this.cart.filter(i => i.id !== id);
    });
  }
}
