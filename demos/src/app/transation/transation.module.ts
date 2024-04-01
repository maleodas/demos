import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransationRoutingModule } from './transation-routing.module';
import { TransationComponent } from '../transation/transation.component';


@NgModule({
  declarations: [
    TransationComponent
  ],
  imports: [
    CommonModule,
    TransationRoutingModule
  ]
})
export class TransationModule { }
