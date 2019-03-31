import { Injectable } from '@angular/core';
import { Cart} from './cart';
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

export class CartService {
  private cartsUrl = 'api/carts';  // URL to web api
  /** GET carts from the server */
  getcarts(): Observable<Cart[]> {
  return this.http.get<Cart[]>(this.cartsUrl)
  .pipe(
    tap(_ => this.log('fetched carts')),
    catchError(this.handleError<Cart[]>('getcarts', []))
  );
}
getcart(id: string): Observable<Cart> {
  const url = `${this.cartsUrl}/${id}`;
  return this.http.get<Cart>(url).pipe(
    tap(_ => this.log(`fetched cart id=${id}`)),
    catchError(this.handleError<Cart>(`getcart id=${id}`))
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
/** PUT: update the cart on the server */
updatecart(cart: Cart): Observable<any> {
  return this.http.put(this.cartsUrl, cart, httpOptions).pipe(
    tap(_ => this.log(`updated cart id=${cart.id}`)),
    catchError(this.handleError<any>('updatecart'))
  );
}
/** DELETE: delete the cart from the server */
deletecart(cart: Cart): Observable<Cart> {
  const id = cart.id;
  const url = `${this.cartsUrl}/${id}`;

  return this.http.delete<Cart>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted cart id=${id}`)),
    catchError(this.handleError<Cart>('deletecart'))
  );
}
/** POST: add a new cart to the server */
addcart(cart: Cart): Observable<Cart> {
  return this.http.post<Cart>(this.cartsUrl, cart, httpOptions).pipe(
    tap((newcart: Cart) => this.log(`added cart w/ id=${newcart.id}`)),
    catchError(this.handleError<Cart>('addcart'))
  );
}
private log(message: string) {
  this.messageService.add(`cartService: ${message}`);
}
constructor(
  private http: HttpClient,
  private messageService: MessageService) { }
}
