import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BswpTransationComponent } from './bswp-transation/bswp-transation.component';
import { BswpBlocksComponent } from './bswp-blocks/bswp-blocks.component';
import { BitcoinSwapComponent } from './bitcoin-swap/bitcoin-swap.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    BswpTransationComponent,
    BswpBlocksComponent,
    BitcoinSwapComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
