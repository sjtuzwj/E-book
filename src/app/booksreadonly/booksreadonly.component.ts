import { OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booksreadonly',
  templateUrl: './booksreadonly.component.html',
  styleUrls: ['./booksreadonly.component.css']
})
export class BooksreadonlyComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) { }
  ngOnInit() {
    this.getbooks();
  }
  getbooks(): void {
    this.bookService.getbooks()
    .subscribe(books => this.books = books);
  }
  changecolor(book: Book): void {
    if (document.getElementById(book.id).style.color === 'black') {
      document.getElementById(book.id).style.color = 'red' ;
      return;
    }
    document.getElementById(book.id).style.color = 'black';
  }
  onSearched(books$: Observable<Book[]>) {
    books$.subscribe(books => this.books = books);
  }
}
