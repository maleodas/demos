import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransationComponent } from './transation/transation.component';

const routes: Routes = [{
  path: '',
  component: TransationComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
