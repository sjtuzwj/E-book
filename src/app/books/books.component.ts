import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  implements OnInit  {
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
  delete(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.bookService.deletebook(book).subscribe();
  }
  add(id: string): void {
    id = id.trim();
    if (!id) { return; }
    this.bookService.addbook({ id } as Book)
      .subscribe(book => {
        this.books.push(book);
      });
  }

}
