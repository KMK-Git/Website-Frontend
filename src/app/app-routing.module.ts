import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'birthday',
    loadChildren: '../birthday/birthday.module#BirthdayModule'
  },
  { path: 'unsubscribe/:key', component: UnsubscribeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
