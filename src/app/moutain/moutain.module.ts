import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoutainRoutingModule } from './moutain-routing.module';
import { MoutainComponent } from './moutain/moutain.component';
import { MoutainDetailComponent } from './moutain-detail/moutain-detail.component';


@NgModule({
  declarations: [
    MoutainComponent,
    MoutainDetailComponent
  ],
  imports: [
    CommonModule,
    MoutainRoutingModule
  ]
})
export class MoutainModule { }
