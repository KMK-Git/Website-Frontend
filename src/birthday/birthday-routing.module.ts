import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthdayPostComponent } from './birthday-post/birthday-post.component';
import { BirthdayLoginComponent } from './birthday-login/birthday-login.component';
import { LoggedInGuardService } from '../app/auth/logged-in-guard.service';
import { LoggedOutGuardService } from '../app/auth/logged-out-guard.service';


const routes: Routes = [
  { path: 'add', component: BirthdayPostComponent, canActivate: [LoggedInGuardService] },
  { path: 'login', component: BirthdayLoginComponent, canActivate: [LoggedOutGuardService] },
  // { path: 'login', component: BirthdayLoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BirthdayRoutingModule { }
