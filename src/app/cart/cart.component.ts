import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Cart, CartItem } from '../cart';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../cart.service';
import {NzNotificationService} from 'ng-zorro-antd';

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
    private notification: NzNotificationService
  ) {}
  ngOnInit(): void {
    this.getcart();
  }
  getcart(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cartService.getcart(id)
      .subscribe(cart => this.cart = cart);
  }
  delete(id: string): void {
      let i = 0;
      for ( ; i < this.cart.items.length; i++) {
          if (this.cart.items[i].id === id ) {
            break;
          }
      }
      this.cart.items.splice(i, 1);
      this.cartService.updatecart(this.cart).subscribe();
      this.notification.create('success', 'Delete Success', '成功删除此商品');
  }
}
