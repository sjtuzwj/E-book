
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService, isNotNil } from 'ng-zorro-antd';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})

export class UsermanagementComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.getusers();
  }
  getusers(): void {
    this.userService.getusers()
      .subscribe(users => this.users = users);
  }
  forbid(user): void {
    user.forbid = true;
    this.userService.updateuser(user).subscribe();
  }
  unforbid(user): void {
    user.forbid = false;
    this.userService.updateuser(user).subscribe();
  }
}

