import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoutainRoutingModule } from './moutain-routing.module';
import { MoutainComponent } from './moutain/moutain.component';
import { MoutainDetailComponent } from './moutain-detail/moutain-detail.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MoutainComponent,
    MoutainDetailComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MoutainRoutingModule,
    ReactiveFormsModule
  ]
})
export class MoutainModule { }
