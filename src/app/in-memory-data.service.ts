import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      {id: 'ISBN7-301-04815-7',
        name: 'Algs',
        author: 'Robert',
        storage: 5,
      imageUrl: '../assets/Algs.jpg'}
      ,
      {id: 'ISBN7-301-04815-8',
        name: 'Fluent',
        author: 'Ramalho',
        storage: 5,
        imageUrl: '../assets/Fluent.jpg'},
      {id: 'ISBN7-301-04815-9',
        name: 'Concrete',
        author: 'Knuth',
        storage: 5,
        imageUrl: '../assets/Concrete.jpg'}
      ,
      {id: 'ISBN7-301-04815-10',
        name: 'TAOCP',
        author: 'Knuth',
        storage: 5,
        imageUrl: '../assets/TAOCP.jpg'}
    ];
    return {books};
  }
}