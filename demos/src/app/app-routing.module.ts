import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransationComponent } from './transation/transation.component';
import { BswpTransationComponent } from './bswp-transation/bswp-transation.component';
import { BswpBlocksComponent } from './bswp-blocks/bswp-blocks.component';
import { BitcoinSwapComponent } from './bitcoin-swap/bitcoin-swap.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
