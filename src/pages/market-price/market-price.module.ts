import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarketPricePage } from './market-price';

@NgModule({
  declarations: [
    MarketPricePage,
  ],
  imports: [
    IonicPageModule.forChild(MarketPricePage),
  ],
})
export class MarketPricePageModule {}
