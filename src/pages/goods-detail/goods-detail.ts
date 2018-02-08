import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { DataService } from '../../app/data.service';

/**
 * Generated class for the GoodsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-goods-detail',
  templateUrl: 'goods-detail.html',
})
export class GoodsDetailPage {
  item = this.navParams.get('item')
  count = 1
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private dataService: DataService
  ) {}

  ionViewDidLoad() {
    
  }

  minusOne() {
    this.count--
    if (this.count < 1) {
      this.count = 1
    }
  }

  addOne() {
    this.count++
    if (this.count > 999) {
      this.count = 999
    }
  }

  addToCart() {
    
    this.item.count = this.count
    this.item.isChecked = true
    this.dataService.addToCart(this.item).subscribe(data => {
      this.toastCtrl.create({
        message: '成功添加到购物车',
        duration: 1000,
        position: 'middle'
      }).present()
    })
    this.navCtrl.pop()
  }

}
