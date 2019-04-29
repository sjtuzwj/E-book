
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { UserService } from '../user.service';
import { User } from '../user';
import { Location } from '@angular/common';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  }
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [ s: string ]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  }
  constructor(
    private location: Location,
    private fb: FormBuilder, private notification: NzNotificationService, private userService: UserService) {
  }

  register(): void {
    this.userService.getusers().subscribe(us => {
      const p = this.validateForm.controls.username.value;
      let b = false;
      us.forEach( ele => {
        if (ele.id === p) {
          b = true;
         }
      });
      if (b) {
        this.notification.create('warning', 'Register Error!', '你取名字好像蔡徐坤');
        return;
      }
      const user = new User();
      user.id = this.validateForm.controls.username.value;
      user.password = this.validateForm.controls.password.value;
      user.admin = false;
      user.mail = this.validateForm.controls.email.value;
      user.forbid = false;
      this.userService.adduser(user).subscribe(_ => {
        this.notification.create('success', 'Register Succeed!', 'Hello, ' + this.validateForm.controls.username.value + '!');
        this.location.back();
      });
    });
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      password         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
      username         : [ null, [ Validators.required ] ],
      email            : [ null, [ Validators.email, Validators.required ] ],
      agree            : [ false ]
    });
  }
}
