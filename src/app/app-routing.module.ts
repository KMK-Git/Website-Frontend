import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { BirthdayPostComponent } from './birthday-post/birthday-post.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'birthday/add', component: BirthdayPostComponent },
  { path: 'unsubsribe/:key', component: UnsubscribeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
