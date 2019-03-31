import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { Cart,CartItem } from '../cart'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../book.service';
import { CartService } from '../cart.service';
import { NzNotificationService } from 'ng-zorro-antd';


@Component({
  selector: 'app-bookbrowser',
  templateUrl: './bookbrowser.component.html',
  styleUrls: ['./bookbrowser.component.css']
})
export class BookbrowserComponent implements OnInit {
  @Input() book: Book;
  @Input() cart: Cart;
  item: CartItem[];
  constructor(
    private notification:NzNotificationService,
    private route: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getbook();
    this.getcart();
  }
  goBack(): void {
    this.location.back();
  }
  getbook(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getbook(id)
      .subscribe(book => this.book = book);
  }
  getcart(): void{  
    this.cartService.getcart('4396')
      .subscribe(cart => this.cart = cart);
  }
  addToCart(n: number): void{
    this.getcart();
    this.cart.items.push({bid:this.book.id,num:n});
    this.cartService.updatecart(this.cart).subscribe();
      this.notification.create('success', 'Add Success', '商品已加入购物车');
  }
}
