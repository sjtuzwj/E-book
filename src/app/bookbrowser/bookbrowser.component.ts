import { Component, OnInit, Input } from '@angular/core';
import { Book, BNS } from '../book';
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
  bns: BNS;
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
      .subscribe(
        book => {
          this.book = book;
          this.bookService.getcomment(id).subscribe( b => this.bns = b );
        });
  }
  comment(): void {
    this.bookService.addComment(this.book.id, '我是水军').subscribe();
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
          break;
        }
    }
    if ( i === this.cart.items.length) {
      this.cart.items.push({ uid: this.cart.id, id: this.book.id,
         num: this.booknum});
    }
    this.cartService.updatecart(this.cart).subscribe();
    this.notification.create('success', 'Add Success', '商品已加入购物车');
  }
}
