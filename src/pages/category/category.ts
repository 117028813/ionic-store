import { Component } from "@angular/core";
import { LoadingController, ToastController } from "ionic-angular";

import { DataService } from "../../app/data.service";

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  items
  loading
  count = 0
  getData() {
    this.dataService.getData().subscribe(data => {
      this.items = data
      this.loading.dismiss()
    }, err => {
      this.loading.dismiss()
      this.toastCtrl.create({
        message: '数据请求失败',
        duration: 3000,
        position: 'middle'
      }).present()
    })
  }

  constructor (private dataService: DataService, private loadingCtrl: LoadingController, private toastCtrl: ToastController) {

  }

  ngOnInit() {
    this.getData()
    this.loading = this.loadingCtrl.create({
      content: '请求数据中...'
    })
    this.loading.present()
  }

  doInfinite(event) {
    this.dataService.getData().subscribe(data => {
      this.count ++
      if (this.count === 5) {
        event.enable(false)
      }
      this.items = this.items.concat(data)
      event.complete()
    })
  }
}