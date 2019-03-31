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
        price: 10,
      imageUrl: '../assets/Algs.jpg'}
      ,
      {id: 'ISBN7-301-04815-8',
        name: 'Fluent',
        author: 'Ramalho',
        storage: 5,
        price: 10,
        imageUrl: '../assets/Fluent.jpg'},
      {id: 'ISBN7-301-04815-9',
        name: 'Concrete',
        author: 'Knuth',
        storage: 5,
        price: 10,
        imageUrl: '../assets/Concrete.jpg'}
      ,
      {id: 'ISBN7-301-04815-10',
        name: 'TAOCP',
        author: 'Knuth',
        storage: 5,
        price: 10,
        imageUrl: '../assets/TAOCP.jpg'},
        
      {id: 'ISBN7-301-04815-223',
        name: 'Datastructrue',
        author: 'Robert',
        storage: 5,
        price: 10,
      imageUrl: '../assets/Algs.jpg'}
      ,
      {id: 'ISBN7-301-04815-82',
        name: 'Noob',
        author: 'Ramalho',
        storage: 5,
        price: 10,
        imageUrl: '../assets/Fluent.jpg'},
      {id: 'ISBN7-301-04815-92',
        name: 'Abstract',
        author: 'Thunk',
        storage: 555,
        price: 100,
        imageUrl: '../assets/Concrete.jpg'}
      ,
      {id: 'ISBN7-301-04815-102',
        name: 'CPTAO',
        author: 'Thunk',
        storage: 5,
        price: 10,
        imageUrl: '../assets/TAOCP.jpg'}
    ];
    const users = [
      {
        id: '114514',
        mail: 'fubuki@qq.com',
        forbid: false
      },
      {
        id: '4396',
        mail: 'clearlove@qq.com',
        forbid: false
      },
      {
        id: '443',
        mail: 'joker@qq.com',
        forbid: false
      },
      {
        id: '1919810',
        mail: 'noob@qq.com',
        forbid: false
      },
     {
        id: '7777777',
        mail: 'clearlove7@qq.com',
        forbid: false
      },
      {
        id: '10086',
        mail: 'mobile@qq.com',
        forbid: false
      },
      {
        id: '1551',
        mail: 'ywwuyi@qq.com',
        forbid: false
      },
      {
        id: '59',
        mail: 'tank@qq.com',
        forbid: true
      }
    ];
    const orders = [
        {
          uid: '7777777',
          bid: 'ISBN7-301-04815-10',
          num: 1,
          time: 1542274800000,
          paid: true,
          completed: false
        },
        {
          uid: '4396',
          bid: 'ISBN7-301-04815-8',
          num: 2,
          time: 1542274900000,
          paid: true,
          completed: false
        },
        {
          uid: '7777777',
          bid: 'ISBN7-301-04815-11',
          num: 2,
          time: 1542274100000,
          paid: true,
          completed: false
        },
        {
          uid: '4396',
          bid: 'ISBN7-301-04815-8',
          num: 3,
          time: 1542274200000,
          paid: true,
          completed: false
        },
        {
          uid: '7777777',
          bid: 'ISBN7-301-04815-10',
          num: 1,
          time: 1542274300000,
          paid: false,
          completed: false
        },
        {
          uid: '4396',
          bid: 'ISBN7-301-04815-8',
          num: 5,
          time: 1542274400000,
          paid: false,
          completed: false
        }
      ];
    const carts = [
      {
        id: '4396',
        items: [
          { bid: 'ISBN7-301-04815-8', num: 5} ,
          { bid: 'ISBN7-301-04815-10', num: 2}
             ]
      }
    ];
    return {books, users, orders, carts};
  }
}
