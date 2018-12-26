import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import {DefaultComponent} from './default/default.component';
import {RouterModule} from '@angular/router';
import { TabsComponent } from './default/tabs/tabs.component';
const COMPONENTS = [
  DefaultComponent,
  SidebarComponent,
  TabsComponent,
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
