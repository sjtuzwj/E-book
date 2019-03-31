import { Component, OnInit, Input } from '@angular/core';
import { Cart, CartItem } from '../cart';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart: Cart;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getcart();
  }
  getcart(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cartService.getcart(id)
      .subscribe(cart => this.cart = cart);
  }
}