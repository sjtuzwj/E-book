import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Cart, CartItem } from '../cart';
import { Order} from '../order';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartService } from '../cart.service';
import {NzNotificationService} from 'ng-zorro-antd';
import { UserService } from '../user.service';
import { OrderService } from '../order.service';
import { OrderedListOutline } from '@ant-design/icons-angular/icons/public_api';

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
    private notification: NzNotificationService,
    private userService: UserService,
    private orderService: OrderService
  ) {}
  ngOnInit(): void {
    this.getcart();
  }
  getcart(): void {
    this.cartService.getcart(this.userService.getuser())
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
      this.cartService.updatecart(this.cart).subscribe(c => {
        this.notification.create('success', 'Delete Success', '成功删除此商品');
      });
  }
  purchase(): void {
    this.cart.items.forEach( item => {
      const order = new Order();
      order.uid = this.cart.id;
      order.completed = false;
      order.bid = item.id;
      order.paid = false;
      order.time = new Date().getTime().toString();
      order.num = item.num;
      order.id = order.time + order.uid.substr(0 , 2) + order.bid.substr(15 , 3);
      this.orderService.addorder(order).subscribe();
    });
    this.cart.items = null;
    this.cartService.updatecart(this.cart).subscribe(c => {this.notification.create('success', 'Purchase Success', '成功下单');
  });
}
}
