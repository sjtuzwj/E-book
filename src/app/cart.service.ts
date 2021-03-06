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

private log(message: string) {
  this.messageService.add(`cartService: ${message}`);
}
constructor(
  private http: HttpClient,
  private messageService: MessageService) { }
}
