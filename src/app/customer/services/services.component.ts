import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-service',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    nav: false,
    autoplay: false,
    autoplayTimeout: 3000,
    items: 3,
    dots: false,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      1920: {
        items: 1
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
