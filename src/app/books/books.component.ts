import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) { }
  ngOnInit() {
    this.getbooks();
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
  getbooks(): void {
    this.bookService.getbooks()
    .subscribe(books => this.books = books);
  }
}
