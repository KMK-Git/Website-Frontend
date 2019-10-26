import { AwsCognitoService } from './../../app/auth/aws-cognito.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birthday-login-form',
  templateUrl: './birthday-login-form.component.html',
  styleUrls: ['./birthday-login-form.component.css']
})
export class BirthdayLoginFormComponent implements OnInit {
  errorMessageEnabled = false;
  successMessageEnabled = false;
  pendingMessageEnabled = false;
  formEnabled = true;
  errorMessage = '';
  birthdayLoginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  get username(): AbstractControl { return this.birthdayLoginForm.get('username'); }
  get password(): AbstractControl { return this.birthdayLoginForm.get('password'); }

  constructor(private cognitoService: AwsCognitoService, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit() {
    this.formEnabled = false;
    this.successMessageEnabled = false;
    this.errorMessageEnabled = false;
    this.pendingMessageEnabled = true;
    try {
      await this.cognitoService.SignIn(this.username.value, this.password.value);
      this.pendingMessageEnabled = false;
      this.errorMessageEnabled = false;
      this.successMessageEnabled = true;
      this.router.navigate(['/birthday/add']);
    } catch (err) {
      this.pendingMessageEnabled = false;
      this.successMessageEnabled = false;
      this.errorMessageEnabled = true;
      this.formEnabled = true;
      this.errorMessage = err.message;
    }
  }
}
