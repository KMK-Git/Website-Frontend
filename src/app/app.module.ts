import { BirthdayModule } from './../birthday/birthday.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContactMeFormComponent } from './contact-me-form/contact-me-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings, RecaptchaFormsModule } from 'ng-recaptcha';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

@NgModule({
   declarations: [
      AppComponent,
      IndexComponent,
      ContactMeFormComponent,
      UnsubscribeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      RecaptchaModule,
      RecaptchaFormsModule,
      BirthdayModule
   ],
   providers: [{
      provide: RECAPTCHA_SETTINGS,
      useValue: {
         siteKey: '6LeTN7cUAAAAAD2BahVW8ZTmfENTYqNb4eRCz7Ug',
      } as RecaptchaSettings,
   }],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
