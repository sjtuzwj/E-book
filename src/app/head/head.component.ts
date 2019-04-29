import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  name = '登录';
  constructor(private userService: UserService) { }
  logout() {
    this.userService.setuser(undefined);
  }
  ngOnInit() {
  }
}
