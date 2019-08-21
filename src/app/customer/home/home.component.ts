import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {NavigationEnd, Router} from '@angular/router';
import {NgwWowService} from 'ngx-wow';
import {filter} from 'rxjs/operators';
import {faStreetView} from '@fortawesome/free-solid-svg-icons';
// import * as $ from 'jquery';
// import 'owl.carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: false,
    margin: 0,
    nav: false,
    autoplay: false,
    autoplayTimeout: 3000,
    items: 2,
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
  faStreetView = faStreetView;

  constructor(private router: Router, private wowService: NgwWowService) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      // Reload WoW animations when done navigating to page,
      // but you are free to call it whenever/wherever you like
      this.wowService.init();
    });
  }

  ngOnInit() {
  }

  openMenu() {
    this.router.navigateByUrl('/menu');
  }
}
