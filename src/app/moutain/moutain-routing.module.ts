import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoutainComponent} from './moutain/moutain.component';
import {FormComponent} from './form/form.component';

const routes: Routes = [
  {path: '', component: MoutainComponent},
  {path: 'edit/:id', component: FormComponent},
  {path: 'add', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoutainRoutingModule { }
