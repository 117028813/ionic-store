import { Component } from "@angular/core";

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  
  goods = [
    {
      id: 1,
      isChecked: true,
      img: 'https://img10.360buyimg.com/n4/jfs/t3478/117/249797307/198145/db0e41ed/58059228N844ac314.jpg',
      name: '雷柏（Rapoo） V500合金版 游戏机械键盘 游戏键盘 吃鸡键盘 电脑键盘 笔记本键盘 黑色 青轴',
      sku: '0.8kg/件，黑色，V500合金版【87键无光】',
      amount: 1,
      num: 1
    },
    {
      id: 2,
      isChecked: true,
      img: 'https://img10.360buyimg.com/n4/jfs/t10171/316/1303871608/174334/125238c6/59df0e3cN4ffab10d.jpg',
      name: '达尔优（dareu）DK100 87键游戏机械键盘 黑色 青轴 绝地求生吃鸡键盘',
      sku: '1.14kg/件，DK100 【87键无光青轴】',
      amount: 2,
      num: 1
    }
  ]

  isCheckedAll
  totalAmount = 0
  totalCount = 0

  ngOnInit() {
    this.computeTotalAmount()

    this.isCheckedAll = this.goods.every((val, index, arr) => {
      return val.isChecked
    })
  }

  ngDoCheck() {
    if (this.totalAmount < 0) {
      this.totalAmount = 0
    }
  }

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
    item.num++
    if (item.num > 999) {
      item.num = 999
      return
    }
    this.totalCount++
    this.totalAmount += item.amount
  }

  minusOne(item) {
    item.num--
    if (item.num < 0) {
      item.num = 0
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
  }

  computeTotalAmount() {
    this.totalCount = 0
    this.totalAmount = 0
    this.goods.forEach((val, ind, arr) => {
      if (val.isChecked) {
        this.totalCount += +val.num
        this.totalAmount += val.amount * val.num
      }
    })
  }

}