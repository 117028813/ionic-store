import { Component } from '@angular/core';
import { NavController, ToastController, ViewController } from 'ionic-angular';
import { DataService } from '../../app/data.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username
  password

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private viewCtrl: ViewController, private dataService: DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ngAfterContentInit() {
    console.log('after view init')
  }

  onLogin() {
    if (this.username === 'admin' && this.password === '123456') {
      this.dataService.isLogin = true
      this.viewCtrl.dismiss()
    } else {
      this.toastCtrl.create({
        message: '用户名或密码不正确',
        duration: 3000,
        position: 'middle'
      }).present()
      this.username = ''
      this.password = ''
    }
  }

}
