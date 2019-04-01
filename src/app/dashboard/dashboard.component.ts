import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) { }
  ngOnInit() {
    this.getbooks();
  }
  // 这里可以引入推荐系统等算法，但是隐藏实现细节。
  // 此处单纯列举了几个
  getbooks(): void {
    this.bookService.getbooks()
      .subscribe(books => this.books = books.slice(0, 4));
  }
}
