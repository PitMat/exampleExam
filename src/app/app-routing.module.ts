import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoutainModule} from './moutain/moutain.module';
import {HttpClientModule} from '@angular/common/http';
import {MoutainRoutingModule} from './moutain/moutain-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./moutain/moutain-routing.module').then(m => m.MoutainRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  MoutainModule,
  HttpClientModule,
  MoutainRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
