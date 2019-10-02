import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { BirthdayPostComponent } from './birthday-post/birthday-post.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'birthday/add', component: BirthdayPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
