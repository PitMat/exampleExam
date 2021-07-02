import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoutainRoutingModule } from './moutain-routing.module';
import { MoutainComponent } from './moutain/moutain.component';


@NgModule({
  declarations: [
    MoutainComponent
  ],
  imports: [
    CommonModule,
    MoutainRoutingModule
  ]
})
export class MoutainModule { }
