import { Component } from "@angular/core";
import { ModalController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { DataService } from "../../app/data.service";

@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {
  modal
  count = 0
  settingTabs = [
    {icon: 'card',title: '待付款'},
    {icon: 'card',title:'待收货'},
    {icon: 'card',title:'退款/售后'},
    {icon: 'card',title:'全部订单'}
  ];
  jingCons = [
    {num: '0',info: '张',txt: '京东券'},
    {num: '0',info: '元',txt: '开通白条'},
    {num: '0',info: '个',txt: '京豆',},
    {num: '0',info: '张',txt: '礼品卡'}
  ];
  myFollows = [
    {num: '0',txt: '关注的商品'},
    {num: '0',txt: '关注的店铺'},
    {num: '0',txt: '浏览记录'}
  ]
  applications = [
    {icon: 'card',txt: '新人福利'},
    {icon: 'card',txt: '京东火车票'},
    {icon: 'card',txt: '我的预约'},
    {icon: 'card',txt: '应用推荐'},
    {icon: 'card',txt: '京东通信营业厅'}
  ]
  cards = [
    {url: 'assets/imgs/logo.png',title: '新人福利',price: '10.00'},
    {url: 'assets/imgs/logo.png',title: '京东火车票',price: '10.00'},
    {url: 'assets/imgs/logo.png',title: '我的预约',price: '10.00'},
    {url: 'assets/imgs/logo.png',title: '应用推荐',price: '10.00'},
    {url: 'assets/imgs/logo.png',title: '京东通信营业厅信营业厅信营业厅信营业厅信营业厅信营业厅信营业厅',price: '10.00'}
  ]

  constructor(private modalCtrl: ModalController, private dataService: DataService) {}

  doInfinite(infiniteScroll) {
    this.count++; 
    if(this.count < 5){
      setTimeout(() => {  
        for (let i = 0; i < 5; i++) {
          this.cards.push( this.cards[i] );  
        }
        infiniteScroll.complete();  
      }, 500);
    }else{
      this.count = 5;
    }
  }

  ionViewDidLoad() {
    if (!this.dataService.isLogin) {
      this.modal = this.modalCtrl.create(LoginPage)
      this.modal.present()
    }
  }
}