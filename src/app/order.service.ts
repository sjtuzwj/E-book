import { Injectable } from '@angular/core';
import { Order } from './order';
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

export class OrderService {
  private ordersUrl = 'api/orders';  // URL to web api
  /** GET orders from the server */
  getorders(): Observable<Order[]> {
  return this.http.get<Order[]>(this.ordersUrl)
  .pipe(
    tap(_ => this.log('fetched orders')),
    catchError(this.handleError<Order[]>('getorders', []))
  );
}


/* GET books whose name contains search term */
searchorderb(term: string): Observable<Order[]> {
  if (term === ' ') {
    return this.getorders();
  }
  if (!term.trim()) {
    // if not search term, return empty book array.
    return of([]);
  }
  return this.http.get<Order[]>(`${this.ordersUrl}/searchb/${term}`).pipe(
    tap(_ => this.log(`found books matching "${term}"`)),
    catchError(this.handleError<Order[]>('searchbooks', []))
  );
}

/* GET books whose name contains search term */
searchorders(term: string): Observable<Order[]> {
  if (term === ' ') {
    return this.getorders();
  }
  if (!term.trim()) {
    // if not search term, return empty book array.
    return of([]);
  }
  return this.http.get<Order[]>(`${this.ordersUrl}/search/${term}`).pipe(
    tap(_ => this.log(`found books matching "${term}"`)),
    catchError(this.handleError<Order[]>('searchorders', []))
  );
}
  getorder(uid: string): Observable<Order[]> {
    const url = `${this.ordersUrl}/search/${uid}`;
    return this.http.get<Order[]>(url)
    .pipe(
      tap(_ => this.log('fetched orders')),
      catchError(this.handleError<Order[]>('getorders', []))
    );
  }
/** POST: add a new order to the server */
addorder(order: Order): Observable<Order> {
  return this.http.post<Order>(this.ordersUrl, order, httpOptions).pipe(
    tap((neworder: Order) => this.log(`added order id=${neworder.id}`)),
    catchError(this.handleError<Order>('addorder'))
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
    // TODO: better job of transforming error for order consumption
    this.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
private log(message: string) {
  this.messageService.add(`orderService: ${message}`);
}
constructor(
  private http: HttpClient,
  private messageService: MessageService) { }
}
