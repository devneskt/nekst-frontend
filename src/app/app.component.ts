import {Component, OnInit} from '@angular/core';
// import * as $ from 'jquery';
import {NavigationEnd, Router} from '@angular/router';
import {NgwWowService} from 'ngx-wow';
import {filter} from 'rxjs/operators';
// import 'scrollUp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nekst-door';

  constructor(private router: Router, private wowService: NgwWowService) {
  }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      // Reload WoW animations when done navigating to page,
      // but you are free to call it whenever/wherever you like
      this.wowService.init();
    });
    // $.ScrollUp({
    //   scrollText: '<i class="fa fa-angle-up"></i>',
    //   easingType: 'linear',
    //   scrollSpeed: 900,
    //   animation: 'slideInRight'
    // });
  }

  onActivate(event: any) {
    window.scroll(0, 0);
  }
}
