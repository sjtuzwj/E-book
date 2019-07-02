import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService, isNotNil } from 'ng-zorro-antd';
import {OrderService} from '../order.service';
import {Order} from '../order';
import { UserService } from '../user.service';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-ordermanagement',
  templateUrl: './ordermanagement.component.html',
  styleUrls: ['./ordermanagement.component.css']
})
export class OrdermanagementComponent implements OnInit {
  pagesize = 5;
  orders: Order[] = [];
  constructor(private orderService: OrderService, private userService: UserService) { }
  ngOnInit() {
    this.getorders();
  }
  isadmin() {
    return this.userService.getadmin();
  }
  getorders(): void {
    if (this.isadmin()) {
      this.orderService.getorders()
      .subscribe( t => {
        this.orders = t;
        this.orders = this.orders.map(m => {
        const d = new Date( parseInt(m.time , 0));
        m.time = ( d.getFullYear()) + '-' +
        (d.getMonth() + 1) + '-' +
        (d.getDate()) + ' ' +
        (d.getHours()) + ':' +
        (d.getMinutes()) + ':' +
        (d.getSeconds());
        return m; }
        );
        this.orders = this.orders.sort(
            (a , b) => parseInt(a.time , 0) - parseInt(b.time , 0));
      });
      return;
    }
    this.orderService.getorder(this.userService.getuser())
      .subscribe( t => {
        this.orders = t;
        this.orders = this.orders.map(m => {
        const d = new Date( parseInt(m.time , 0));
        m.time = ( d.getFullYear()) + '-' +
        (d.getMonth() + 1) + '-' +
        (d.getDate()) + ' ' +
        (d.getHours()) + ':' +
        (d.getMinutes()) + ':' +
        (d.getSeconds());
        return m; }
        );
        this.orders = this.orders.sort(
          (a , b) => parseInt(a.time , 0) - parseInt(b.time , 0));
    });
  }
  search(term: string): void {
    if (!this.isadmin()) { return;
    }
    this.orderService.searchorders(term).subscribe( t => {
      this.orders = t;
      this.orders = this.orders.map(m => {
      const d = new Date( parseInt(m.time , 0));
      m.time = ( d.getFullYear()) + '-' +
      (d.getMonth() + 1) + '-' +
      (d.getDate()) + ' ' +
      (d.getHours()) + ':' +
      (d.getMinutes()) + ':' +
      (d.getSeconds());
      return m; }
      );
      this.orders = this.orders.sort(
          (a , b) => parseInt(a.time , 0) - parseInt(b.time , 0));
    });
  }
  searchb(term: string): void {
    if (!this.isadmin()) { return;
    }
    this.orderService.searchorderb(term).subscribe( t => {
      this.orders = t;
      this.orders = this.orders.map(m => {
      const d = new Date( parseInt(m.time , 0));
      m.time = ( d.getFullYear()) + '-' +
      (d.getMonth() + 1) + '-' +
      (d.getDate()) + ' ' +
      (d.getHours()) + ':' +
      (d.getMinutes()) + ':' +
      (d.getSeconds());
      return m; }
      );
      this.orders = this.orders.sort(
          (a , b) => parseInt(a.time , 0) - parseInt(b.time , 0));
    });
  }
}
