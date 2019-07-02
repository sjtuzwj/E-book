import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) { }
  isadmin() {
    return this.userService.getadmin();
  }
  logout() {
    this.userService.setuser(undefined);
  }
  ngOnInit() {
  }
}
