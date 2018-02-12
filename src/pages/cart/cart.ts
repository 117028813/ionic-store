import { Component } from "@angular/core";
import { DataService } from "../../app/data.service";
import { LoadingController, ToastController } from "ionic-angular";

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  goods
  isCheckedAll
  isEmpty = false
  totalAmount = 0
  totalCount = 0

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      content: '请求数据中...'
    })
    loading.present()
    this.dataService.cartGoods().subscribe(data => {
      loading.dismiss()
      this.goods = data
      this.computeTotalAmount()
      this.isCheckedAll = this.goods.every((val, index, arr) => {
        return val.isChecked
      })
    }, err => {
      loading.dismiss()
      this.toastCtrl.create({
        message: '请求数据失败',
        duration: 1000,
        position: 'middle'
      }).present()
    })
  }

  ngDoCheck() {
    if (this.totalAmount < 0) {
      this.totalAmount = 0
    }
    if (this.goods && this.goods.length === 0) {
      this.isEmpty = true
    } else {
      this.isEmpty = false
    }
  }

  constructor(
    private dataService: DataService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  onChecked() {
    this.isCheckedAll = this.goods.every((val, index, arr) => {
      return val.isChecked
    })

    this.computeTotalAmount()
  }

  onCheckedAll() {
    this.goods.forEach((val, ind, arr) => {
      val.isChecked = this.isCheckedAll
    })

    this.computeTotalAmount()
  }

  addOne(item) {
    item.count++
    if (item.count > 999) {
      item.count = 999
      return
    }
    this.totalCount++
    this.totalAmount += item.amount
  }

  minusOne(item) {
    item.count--
    if (item.count < 0) {
      item.count = 0
      return
    }
    this.totalCount--
    this.totalAmount -= item.amount
  }

  onChangeNum(item) {
    this.totalCount = 0
    this.totalAmount = 0
    this.computeTotalAmount()
  }

  deleteGoods(item) {
    this.goods = this.goods.filter((val, ind, arr) => {
      return val.id != item.id
    })
    this.computeTotalAmount()
    this.dataService.deleteGoods(JSON.stringify(item)).subscribe(data => {
      this.goods = data
      this.toastCtrl.create({
        message: '删除成功',
        duration: 1000,
        position: 'middle'
      }).present()
    })
  }

  computeTotalAmount() {
    this.totalCount = 0
    this.totalAmount = 0
    this.goods.forEach((val, ind, arr) => {
      if (val.isChecked) {
        this.totalCount += +val.count
        this.totalAmount += val.amount * val.count
      }
    })
  }

}