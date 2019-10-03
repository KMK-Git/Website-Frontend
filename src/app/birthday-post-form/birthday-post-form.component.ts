import { timezones } from './timezones';
import { HttpRequestsService } from './../http-requests.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Validators } from '@angular/forms';



const dayValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const day = control.get('day');
  const month = control.get('month');
  const day30Months = [4, 6, 9, 11];
  if (day && month) {
    if (month.value === 2 && day.value > 29) {
      return { dayValidator: true };
    } else if (day30Months.includes(month.value) && day.value > 30) {
      return { dayValidator: true };
    } else if (day.value > 31) {
      return { dayValidator: true };
    }
  } else {
    return null;
  }

};

@Component({
  selector: 'app-birthday-post-form',
  templateUrl: './birthday-post-form.component.html',
  styleUrls: ['./birthday-post-form.component.css']
})
export class BirthdayPostFormComponent implements OnInit {
  errorMessageEnabled = false;
  successMessageEnabled = false;
  pendingMessageEnabled = false;
  formEnabled = true;
  errorMessage = '';
  allTimezones = timezones;
  birthdayPostForm = new FormGroup({
    day: new FormControl('', [Validators.required, Validators.min(1), Validators.max(31)]),
    month: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
    firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    timezone: new FormControl('', [Validators.required]),
    subtext: new FormControl('', [Validators.required, Validators.maxLength(500)]),
  }, { validators: dayValidator });
  get day(): AbstractControl { return this.birthdayPostForm.get('day'); }
  get month(): AbstractControl { return this.birthdayPostForm.get('month'); }
  get firstName(): AbstractControl { return this.birthdayPostForm.get('firstName'); }
  get lastName(): AbstractControl { return this.birthdayPostForm.get('lastName'); }
  get email(): AbstractControl { return this.birthdayPostForm.get('email'); }
  get timezone(): AbstractControl { return this.birthdayPostForm.get('timezone'); }
  get subtext(): AbstractControl { return this.birthdayPostForm.get('subtext'); }

  constructor(private httpService: HttpRequestsService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.formEnabled = false;
    this.successMessageEnabled = false;
    this.errorMessageEnabled = false;
    this.pendingMessageEnabled = true;
    const body = this.birthdayPostForm.value;
    console.log(body);
    this.httpService.postRequest('birthday', body).subscribe(
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
