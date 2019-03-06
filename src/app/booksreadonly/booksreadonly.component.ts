import { OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Component } from '@angular/core';


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
}
