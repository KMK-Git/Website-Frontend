import { HttpRequestsService } from './../http-requests.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me-form',
  templateUrl: './contact-me-form.component.html',
  styleUrls: ['./contact-me-form.component.css']
})
export class ContactMeFormComponent implements OnInit {
  private errorMessageEnabled = false;
  private successMessageEnabled = false;
  private pendingMessageEnabled = false;
  private formEnabled = true;
  private errorMessage = '';
  private contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    message: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    recaptcha: new FormControl(null, Validators.required)
  });
  get firstName(): AbstractControl { return this.contactForm.get('firstName'); }
  get lastName(): AbstractControl { return this.contactForm.get('lastName'); }
  get email(): AbstractControl { return this.contactForm.get('email'); }
  get subject(): AbstractControl { return this.contactForm.get('subject'); }
  get message(): AbstractControl { return this.contactForm.get('message'); }
  get recaptcha(): AbstractControl { return this.contactForm.get('message'); }

  constructor(private httpService: HttpRequestsService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.formEnabled = false;
    this.successMessageEnabled = false;
    this.errorMessageEnabled = false;
    this.pendingMessageEnabled = true;
    this.httpService.postRequest('contact-form', this.contactForm.value).subscribe(
      msg => {
        console.log(msg);
        this.pendingMessageEnabled = false;
        this.errorMessageEnabled = false;
        this.successMessageEnabled = true;
      },
      err => {
        console.log(err);
        this.pendingMessageEnabled = false;
        this.successMessageEnabled = false;
        this.errorMessageEnabled = true;
        this.formEnabled = true;
        this.errorMessage = err;
      }
    );
  }
}
