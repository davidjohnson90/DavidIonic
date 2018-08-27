import { Component } from '@angular/core';
import {OrdersPage} from "../orders/orders";
import {RatesPage} from "../rates/rates";
import {HomePage} from "../home/home";
import {TrackPage} from "../track/track";
import {MarketPricePage} from "../market-price/market-price";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  ordersPage = OrdersPage;
  ratesPage = RatesPage;
  homePage = HomePage;
  trackPage = TrackPage;
  marketPricePage = MarketPricePage;
}
