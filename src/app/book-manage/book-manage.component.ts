import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-manage',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.css']
})
export class BookManageComponent implements OnInit {
  @Input() book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getbook();
  }
  goBack(): void {
    this.location.back();
  }
  getbook(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getbook(id)
      .subscribe(book => this.book = book);
  }
  save(): void {
    this.bookService.updatebook(this.book)
      .subscribe(() => this.goBack());
  }
}
