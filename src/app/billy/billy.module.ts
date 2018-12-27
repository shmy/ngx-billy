import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from './layout/layout.module';
import { KeepScrollPositionDirective } from './directive/keep-scroll-position.directive';

@NgModule({
  declarations: [
    KeepScrollPositionDirective
  ],
  imports: [
    CommonModule,
    LayoutModule,
  ],
  exports: [
    LayoutModule,
    KeepScrollPositionDirective,
  ]
})
export class BillyModule { }
