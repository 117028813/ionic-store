import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CategoryPage } from "../category/category";
import { DiscoverPage } from '../discover/discover';
import { CartPage } from "../cart/cart";
import { MyPage } from "../my/my";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoryPage;
  tab3Root = DiscoverPage;
  tab4Root = CartPage
  tab5Root = MyPage

  constructor() {

  }

}
