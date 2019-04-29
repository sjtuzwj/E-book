import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService, isNotNil } from 'ng-zorro-antd';
import {OrderService} from '../order.service';
import {Order} from '../order';
import { UserService } from '../user.service';

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
  getorders(): void {
    this.orderService.getorder(this.userService.getuser())
      .subscribe(orders => this.orders = orders);
  }
}
