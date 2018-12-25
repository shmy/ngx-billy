import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './routes/exception/not-found/not-found.component';
import {DefaultComponent} from './billy/layout/default/default.component';
import {BillyModule} from './billy/billy.module';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: './routes/dashboard/dashboard-routing.module#DashboardRoutingModule',
      },
      {
        path: 'general',
        loadChildren: './routes/general/general-routing.module#GeneralRoutingModule',
      },
      {
        path: '**',
        component: NotFoundComponent,
      }
    ]
  },
];

@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BillyModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
