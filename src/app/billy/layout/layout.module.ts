import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule, NZ_I18N, NzMenuModule, zh_CN} from 'ng-zorro-antd';
import { SidebarItemComponent } from './default/sidebar-item/sidebar-item.component';
import {DefaultComponent} from './default/default.component';
import {RouterModule} from '@angular/router';
const COMPONENTS = [
  DefaultComponent,
  SidebarItemComponent,
];
const IMPORTS = [
  RouterModule,
  CommonModule,
  NgZorroAntdModule,
];
@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...IMPORTS
  ],
  exports: [
    ...COMPONENTS,
    ...IMPORTS
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class LayoutModule { }
