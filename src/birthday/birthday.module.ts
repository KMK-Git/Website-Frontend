import { BirthdayRoutingModule } from './birthday-routing.module';
import { BirthdayPostFormComponent } from './birthday-post-form/birthday-post-form.component';
import { BirthdayPostComponent } from './birthday-post/birthday-post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthdayLoginComponent } from './birthday-login/birthday-login.component';
import { BirthdayLoginFormComponent } from './birthday-login-form/birthday-login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BirthdayRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    BirthdayPostComponent,
    BirthdayPostFormComponent,
    BirthdayLoginComponent,
    BirthdayLoginFormComponent
  ]
})
export class BirthdayModule { }
