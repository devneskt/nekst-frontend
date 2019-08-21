import {Component, HostListener, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {
  faAngleUp = faAngleUp;
  self: any;
  triggerVisible = false;

  options = {
    scrollName: 'scrollUp',      // Element ID
    scrollDistance: 300,         // Distance from top/bottom before showing element (px)
    scrollFrom: 'top',           // 'top' or 'bottom'
    scrollSpeed: 900,            // Speed back to top (ms)
    easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
    animation: 'slideInRight',           // Fade, slide, none
    animationSpeed: 200,         // Animation in speed (ms)
    scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
    scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
    scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
    scrollTitle: false,          // Set a custom <a> title if required. Defaults to scrollText
    scrollImg: false,            // Set true to use image
    activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    zIndex: 2147483647           // Z-Index for the overlay
  };

  constructor() { }

  @HostListener('window:scroll', [])

  onWindowScroll() {
    let scrollDis;
    let animIn;
    let animOut;
    let animSpeed;
    if (this.options.scrollFrom === 'top') {
      scrollDis = this.options.scrollDistance;
    } else {
      scrollDis = $(document).height() - $(window).height() - this.options.scrollDistance;
    }
    switch (this.options.animation) {
      case 'fade':
        animIn = 'fadeIn';
        animOut = 'fadeOut';
        animSpeed = this.options.animationSpeed;
        break;

      case 'slide':
        animIn = 'slideDown';
        animOut = 'slideUp';
        animSpeed = this.options.animationSpeed;
        break;

      default:
        animIn = 'show';
        animOut = 'hide';
        animSpeed = 0;
    }
    if ($(window).scrollTop() > scrollDis) {
      if (!this.triggerVisible) {
        this.self[animIn](animSpeed);
        this.triggerVisible = true;
      }
    } else {
      if (this.triggerVisible) {
        this.self[animOut](animSpeed);
        this.triggerVisible = false;
      }
    }
  }

  ngOnInit() {
    this.self = $('#scrollUp');
    this.self.css({
      display: 'none',
      position: 'fixed',
      zIndex: this.options.zIndex
    });
  }

  scrollToTop(event: any) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: this.options.scrollTarget
    }, this.options.scrollSpeed, this.options.easingType);
  }
}
