import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { OrderService } from '../order.service';
import { Order} from '../order';
import { User} from '../user';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
    booknum: number;
    orders: Order[];
    option: any;
    constructor(private userService: UserService, private orderService: OrderService) {
    }
    ngOnInit() {
        this.orderService.getorder(this.userService.getuser()).subscribe(orders => this.orders = orders);
    }
    statistic() {
        const nums = this.orders.map(order => order.num);
        const dates = this.orders.map(order => order.time);
        this.booknum = nums.reduce( (a , b) => a + b );
        this.option = {
        toolbox: {
            feature: {
                saveAsImage: {},
                dataZoom : {},
                dataZoomReset: {},
            }
        },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: dates
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: nums,
                type: 'line',
                areaStyle: {}
            }]
        };
    }
}
