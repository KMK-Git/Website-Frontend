import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContactMeFormComponent } from './contact-me-form/contact-me-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings, RecaptchaFormsModule } from 'ng-recaptcha';
import { BirthdayPostComponent } from './birthday-post/birthday-post.component';
import { BirthdayPostFormComponent } from './birthday-post-form/birthday-post-form.component';

@NgModule({
   declarations: [
      AppComponent,
      IndexComponent,
      ContactMeFormComponent,
      BirthdayPostComponent,
      BirthdayPostFormComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      RecaptchaModule,
      RecaptchaFormsModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
