
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService, isNotNil, NzNotificationService } from 'ng-zorro-antd';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})

export class UsermanagementComponent implements OnInit {
  pagesize: number;
  sortName: string | null = null;
  sortValue: string | null = null;
  users: User[] = [];
  constructor(private userService: UserService, private notification: NzNotificationService) { }
  ngOnInit() {
    this.getusers();
    this.pagesize = 5;
  }
  getusers(): void {
    this.userService.getusers()
      .subscribe(users => this.users = users);
  }
  forbid(user): void {
    user.forbid = true;
    this.userService.updateuser(user).subscribe(_ => {
      this.notification.create('success', 'Forbid Succeed!', '你号没了！');
  });
  }
  unforbid(user): void {
    user.forbid = false;
    this.userService.updateuser(user).subscribe(_ => {
      this.notification.create('success', 'Unforbid Succeed!', '你号有了！');
  });
  }
}

