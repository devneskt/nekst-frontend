import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {faFacebookF, faGooglePlusG, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-account-box',
  templateUrl: './account-box.component.html',
  styleUrls: ['./account-box.component.scss']
})
export class AccountBoxComponent implements OnInit {
  faFacebook = faFacebookF;
  faTwitter = faTwitter;
  faGooglePlus = faGooglePlusG;

  constructor() { }

  ngOnInit() {
  }

  closeBox() {
    const container = $('.accountbox-wrapper');
    container.removeClass('is-visible');
  }
}
