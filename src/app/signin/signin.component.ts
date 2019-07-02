import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { NzNotificationService } from 'ng-zorro-antd';
import { UserService } from '../user.service';
import { User } from '../user';
import { GroupAst } from '@angular/animations/browser/src/dsl/animation_ast';
import { selectDropDownAnimation } from 'ng-zorro-antd/core/animation/select-dropdown-animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  validateForm: FormGroup;
  user: User;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[ i ].markAsDirty();
        this.validateForm.controls[ i ].updateValueAndValidity();
      }
    }
  }

  constructor(
    private location: Location, private router: Router,
    private userService: UserService, private fb: FormBuilder, private notification: NzNotificationService) {
  }

  forget(): void {
    this.notification.create('error', '致naive的你', '想找回？你号没了！');
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
  login(): void {
    if (this.userService.getuser()) {
      this.notification.create('error', '请不要贪得无厌', '重复登录！');
      return;
    }
    this.userService.getuserbyid(this.validateForm.controls.userName.value).subscribe(ruser => {
      this.user = ruser;
      if (!this.user) {
        this.notification.create('error', '账号不存在', '你号没了！');
     } else if (this.user.forbid) {
      this.notification.create('error', '您的账号已经被禁用', '你号没了！');
    } else if (this.user.password !== this.validateForm.controls.password.value) {
      this.notification.create('error', '密码错误', '你号没了！');
    } else {
      this.notification.create('success', '登陆成功', '你号有了！');
      this.userService.setuser(this.user.id);
      this.location.back();
    }
  });
}
}
