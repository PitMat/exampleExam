import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoutainComponent} from './moutain/moutain.component';

const routes: Routes = [
  {path: '', component: MoutainComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoutainRoutingModule { }
