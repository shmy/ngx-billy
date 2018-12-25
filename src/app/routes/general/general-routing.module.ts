import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ButtonComponent} from './button/button.component';
import {IconComponent} from './icon/icon.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'button',
  },
  {
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'icon',
    component: IconComponent,
  }
];
@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
