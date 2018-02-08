import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DataService } from '../../app/data.service';
import { GoodsDetailPage } from '../goods-detail/goods-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isLogin
  username = this.isLogin ? 'ljy' : '登录'
  slideImgs = [
    {
      src: 'https://img1.360buyimg.com/da/jfs/t19441/186/186107459/115421/c393a8d2/5a613450Nf4070a9b.jpg'
    },
    {
      src: 'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t13087/42/2155258864/149701/4859576a/5a6162afNc7d6cdf6.jpg!q70.jpg'
    }
  ]

  appcenter = []
  seckills = []
  yearGoods = []

  goods = [{
    id: 1,
    img: 'https://img10.360buyimg.com/n4/jfs/t3478/117/249797307/198145/db0e41ed/58059228N844ac314.jpg',
    name: '雷柏（Rapoo） V500合金版 游戏机械键盘 游戏键盘 吃鸡键盘 电脑键盘 笔记本键盘 黑色 青轴',
    amount: 89
  }, {
    id: 2,
    img: 'https://img10.360buyimg.com/n4/jfs/t10171/316/1303871608/174334/125238c6/59df0e3cN4ffab10d.jpg',
    name: '达尔优（dareu）DK100 87键游戏机械键盘 黑色 青轴 绝地求生吃鸡键盘',
    amount: 99
  }, {
    id: 3,
    img: 'https://img10.360buyimg.com/n4/jfs/t15253/142/2186086528/265300/181150e3/5a7906c0Ne99b1b2d.jpg',
    name: '任天堂（Nintendo） Switch 游戏机 掌机 ns 掌上游戏机便携 Switch NS 彩色港版',
    amount: 2399
  }]

  constructor(public navCtrl: NavController, private dataService: DataService) {
  }

  ngOnInit() {
    this.isLogin = this.dataService.isLogin

    for (let i = 0; i < 10; i++) {
      this.appcenter.push({
        imgSrc: 'https://m.360buyimg.com/mobilecms/jfs/t15835/38/1839282685/18115/3bf919ae/5a607233N99313ba1.png',
        text: '京东超市'
      })

      this.seckills.push({
        imgSrc: 'https://m.360buyimg.com/mobilecms/s220x220_jfs/t16333/24/1665418125/200202/23007323/5a65b560N5ad07bff.jpg!q70.jpg',
        newPrice: 118,
        originalPrice: 138
      })
    }

    for (let i = 0; i < 4; i++) {
      this.yearGoods.push({
        imgSrc: 'https://m.360buyimg.com/mobilecms/jfs/t15787/8/1822292079/84845/455d3506/5a61ca4cNfd6b4239.jpg!q70.jpg'
      })
    }
  }

  ngDoCheck() {
    this.isLogin = this.dataService.isLogin
    this.username = this.isLogin ? 'ljy' : '登录'
  }

  onLogin() {
    this.navCtrl.push(LoginPage)
  }

  openGoodsDetail(item) {
    this.navCtrl.push(GoodsDetailPage, {
      item: item
    })
  }

}
