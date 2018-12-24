import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {V1Component} from './v1/v1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'v1',
  },
  {
    path: 'v1',
    component: V1Component,
  }
];

@NgModule({
  declarations: [
    V1Component,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
