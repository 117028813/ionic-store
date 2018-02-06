import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera, CameraOptions } from "@ionic-native/camera";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {
  imgUrl
  scanUrl
  options: CameraOptions = {
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  getPicture() {
    this.camera.getPicture(this.options).then(imgData => {
      this.imgUrl = 'data:image/jpeg;base64,' + imgData
    }, err => {
      alert(err)
    })
  }

  scanBarcode() {
    this.barcodeScanner.scan().then(data => {
      this.scanUrl = data
    }, err => alert(err))
  }

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner
  ) {}

}
