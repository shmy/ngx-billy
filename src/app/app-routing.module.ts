import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './routes/exception/not-found/not-found.component';
import {DefaultComponent} from './layout/default/default.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DefaultComponent,
    loadChildren: './routes/dashboard/dashboard-routing.module#DashboardRoutingModule',
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  declarations: [
    DefaultComponent,
    NotFoundComponent,
  ],
  imports: [RouterModule.forRoot(routes), NgZorroAntdModule],
  exports: [RouterModule],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class AppRoutingModule { }
