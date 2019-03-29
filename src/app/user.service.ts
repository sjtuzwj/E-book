import { Injectable } from '@angular/core';
import { User } from './user';
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

export class UserService {
  private usersUrl = 'api/users';  // URL to web api
  /** GET users from the server */
  getusers(): Observable<User[]> {
  return this.http.get<User[]>(this.usersUrl)
  .pipe(
    tap(_ => this.log('fetched users')),
    catchError(this.handleError<User[]>('getusers', []))
  );
}

/** PUT: update the user on the server */
updateuser(user: User): Observable<any> {
  return this.http.put(this.usersUrl, user, httpOptions).pipe(
    tap(_ => this.log(`updated user id=${user.id}`)),
    catchError(this.handleError<any>('updateuser'))
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
private log(message: string) {
  this.messageService.add(`userService: ${message}`);
}
constructor(
  private http: HttpClient,
  private messageService: MessageService) { }
}
