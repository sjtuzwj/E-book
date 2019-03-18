
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';


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
  constructor(private fb: FormBuilder, private notification: NzNotificationService) {
  }

  register(): void {
    if (!this.validateForm.controls.agree.value) {
      this.notification.create('warning', 'Register Error!', 'Sorry, you havn\'t agreed our protocol first.');
      return;
    }
    this.notification.create('success', 'Register Succeed!', 'Hello, ' + this.validateForm.controls.username.value + '!');
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
