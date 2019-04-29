import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class BookService {
  private booksUrl = 'api/books';  // URL to web api
  /** GET books from the server */
  getbooks(): Observable<Book[]> {
  return this.http.get<Book[]>(this.booksUrl)
  .pipe(
    tap(_ => this.log('fetched books')),
    catchError(this.handleError<Book[]>('getbooks', []))
  );
}
getbook(id: string): Observable<Book> {
  const url = `${this.booksUrl}/${id}`;
  return this.http.get<Book>(url).pipe(
    tap(_ => this.log(`fetched book id=${id}`)),
    catchError(this.handleError<Book>(`getbook id=${id}`))
  );
}
/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
/** PUT: update the book on the server */
updatebook(book: Book): Observable<any> {
  return this.http.put(this.booksUrl, book, httpOptions).pipe(
    tap(_ => this.log(`updated book id=${book.id}`)),
    catchError(this.handleError<any>('updatebook'))
  );
}
/** DELETE: delete the book from the server */
deletebook(book: Book): Observable<Book> {
  const id = book.id;
  const url = `${this.booksUrl}/${id}`;

  return this.http.delete<Book>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted book id=${id}`)),
    catchError(this.handleError<Book>('deletebook'))
  );
}
/* GET books whose name contains search term */
searchbooks(term: string): Observable<Book[]> {
  if (term === ' ') {
    return this.getbooks();
  }
  if (!term.trim()) {
    // if not search term, return empty book array.
    return of([]);
  }
  return this.http.get<Book[]>(`${this.booksUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found books matching "${term}"`)),
    catchError(this.handleError<Book[]>('searchbooks', []))
  );
}
/** POST: add a new book to the server */
addbook(book: Book): Observable<Book> {
  return this.http.post<Book>(this.booksUrl, book, httpOptions).pipe(
    tap((newbook: Book) => this.log(`added book id=${newbook.id}`)),
    catchError(this.handleError<Book>('addbook'))
  );
}
private log(message: string) {
  this.messageService.add(`bookService: ${message}`);
}
constructor(
  private http: HttpClient,
  private messageService: MessageService) { }
}
