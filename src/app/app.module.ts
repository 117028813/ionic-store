import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CategoryPage } from "../pages/category/category";
import { DiscoverPage } from "../pages/discover/discover";
import { CartPage } from "../pages/cart/cart";
import { MyPage } from "../pages/my/my";
import { TabsPage } from '../pages/tabs/tabs';
import { ListItemComponent } from "../pages/list-item/list-item.component";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from "@ionic-native/camera";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

import { DataService } from "./data.service";
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoryPage,
    DiscoverPage,
    CartPage,
    MyPage,
    TabsPage,
    ListItemComponent,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryPage,
    DiscoverPage,
    CartPage,
    MyPage,
    TabsPage,
    ListItemComponent,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    Camera,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
