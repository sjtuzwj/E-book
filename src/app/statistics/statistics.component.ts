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
        this.getall();
    }
    getall() {
        if (this.isadmin()) {
            this.orderService.getorders().subscribe(t => {
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
        this.orderService.getorder(this.userService.getuser()).subscribe(t => {
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
    isadmin() {
        return this.userService.getadmin();
    }
    search(term) {
    if (!this.isadmin()) { return;
    }
    console.log(term);
    this.orderService.getorder(term).subscribe(t => {
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
        this.statistic();
      });
    }
    searchb(term) {
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
            this.statistic(); });
        }
    searchall(term) {
        this.getall();
        this.statistic();
    }
    statistic() {
        const nums = this.orders.map(order => [order.num, order.bid, order.time]);
        this.booknum =  this.orders.reduce((total, currentValue, currentIndex, arr) => {
            return total + currentValue.num;
        }, 0);
        this.option = {
            tooltip: {},
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
            },
            yAxis: {
                type: 'value'
            },
            dataset: {
                dimensions: [
                    'num',
                    'bid',
                    'date',
                ],
                source: nums  },
            series: [{
                type: 'line',
                areaStyle: {},
                encode: {
                    x: 'date',
                    y: 'num',
                    tooltip: [0, 1, 2]
                }
            }]
        };
    }
}
