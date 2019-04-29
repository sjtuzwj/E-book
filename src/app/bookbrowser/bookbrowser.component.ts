import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { Cart, CartItem } from '../cart';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../book.service';
import { CartService } from '../cart.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { UserService } from '../user.service';


@Component({
  selector: 'app-bookbrowser',
  templateUrl: './bookbrowser.component.html',
  styleUrls: ['./bookbrowser.component.css']
})
export class BookbrowserComponent implements OnInit {
  @Input() book: Book;
  @Input() cart: Cart;
  booknum: number;
  constructor(
    private notification: NzNotificationService,
    private route: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService,
    private location: Location,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.getbook();
    this.getcart();
  }
  goBack(): void {
    this.location.back();
  }
  getbook(): void {
    this.booknum = 1;
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getbook(id)
      .subscribe(book => this.book = book);
  }
  getcart(): void {
    this.cartService.getcart(this.userService.getuser())
      .subscribe(cart => this.cart = cart);
  }
  addToCart(): void {
    if (!this.userService.getuser()) {
    this.notification.create('warning', 'Add Failed', '没有登录');
    return;
    }
    if (this.booknum > this.book.storage) {
    this.notification.create('warning', 'Add Failed', '商品库存不足');
    return;
    }
    this.getcart();
    let i = 0;
    for ( ; i < this.cart.items.length; i++) {
        if (this.cart.items[i].id === this.book.id ) {
          this.cart.items[i].num += this.booknum;
          this.cart.items[i].amt += this.booknum * this.book.price;
          break;
        }
    }
    if ( i === this.cart.items.length) {
      this.cart.items.push({ id: this.book.id, num: this.booknum, prc: this.book.price, amt: this.booknum * this.book.price});
    }
    this.book.storage -= this.booknum;
    this.cartService.updatecart(this.cart).subscribe();
    this.bookService.updatebook(this.book)
      .subscribe();
    this.notification.create('success', 'Add Success', '商品已加入购物车');
  }
}
