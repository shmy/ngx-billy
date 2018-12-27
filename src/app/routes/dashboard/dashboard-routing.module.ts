import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {V1Component} from './v1/v1.component';
import {BillyModule} from '../../billy/billy.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'v1',
  },
  {
    path: 'v1',
    component: V1Component,
    data: {
      title: '控制台控制台控制台控制台',
      keep: true,
    }
  }
];

@NgModule({
  declarations: [
    V1Component,
  ],
  imports: [RouterModule.forChild(routes), BillyModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
