import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  // styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item;
  coverUrl;
  morePicUrl1;
  morePicUrl2;

  constructor() { }

  ngOnInit() {
    this.coverUrl = `data:image/png;base64,${this.item.target.cover_url}`;
    this.morePicUrl1 = `data:image/png;base64,${this.item.target.more_pic_urls[0]}`;
    this.morePicUrl2 = `data:image/png;base64,${this.item.target.more_pic_urls[1]}`;
  }

}
