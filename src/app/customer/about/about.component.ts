import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NgwWowService} from 'ngx-wow';
import {filter} from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  customOptions = {
    loop: true,
    margin: 0,
    nav: true,
    autoplay: false,
    autoplayTimeout: 10000,
    items: 1,
    navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
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

  constructor(private router: Router, private wowService: NgwWowService) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      // Reload WoW animations when done navigating to page,
      // but you are free to call it whenever/wherever you like
      this.wowService.init();
    });
  }

  ngOnInit() {
    // $('a.video-play-button').yu2fvl();
  }

  // yu2fvl() {
  //   const win = $( window );
  //   const ytUrlPrefix = 'https://www.youtube.com/embed/';
  //   const defaults = {
  //       minPaddingX: 50,
  //       minPaddingY: 50,
  //       ratio: 16 / 9,
  //       cssClass: 'yu2fvl',
  //       overlayCssClass: '-overlay',
  //       iframeCssClass: '-iframe',
  //       closeCssClass: '-close',
  //       closeText: 'X',
  //       open: false,
  //       vid: false,
  //       t: 0
  //     };
  //   const options = {};
  //   const settings = $.extend({}, defaults, options);
  //
  //   if ( settings.vid === false ) {
  //     console.log('YOU MUST SET THE \'vid\' option');
  //   } else {
  //     this.createLightbox( settings, null, settings.vid, settings.t );
  //   }
  // }
  //
  // private createLightbox(settings, btn, vid, t) {
  //   const lightboxCss = {
  //     display: 'none',
  //     position: 'fixed'
  //   };
  //   const overlayCss = {
  //       display: 'none',
  //       position: 'fixed',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //       height: '100%'
  //     };
  //   const ytT = '?start=';
  //   const ytEnableJsApi = '&enablejsapi=1';
  //   const iframeCss = {
  //     width: '100%',
  //     height: '100%'
  //   };
  //   const lightbox = $( document.createElement( 'DIV' ) )
  //       .addClass( settings.cssClass )
  //       .css(lightboxCss ),
  //
  //     overlay = $( document.createElement( 'DIV' ) )
  //       .addClass( settings.cssClass + settings.overlayCssClass )
  //       .css( overlayCss ),
  //
  //     close = $(document.createElement( 'BUTTON' ) )
  //       .addClass( settings.cssClass + settings.closeCssClass )
  //       .html( settings.closeText ),
  //
  //     iframe = $( document.createElement('IFRAME' ) )
  //       .addClass( settings.cssClass + settings.iframeCssClass )
  //       .attr( { src: ytUrlPrefix + vid + ytT + t + ytEnableJsApi } )
  //       .css( iframeCss );
  //
  //   // append the iframe to the lightbox and the lightbox & overlay to the body
  //   lightbox.append( iframe ).append( close );
  //
  //   $( 'body' ).append( overlay ).append( lightbox );
  //
  //   if ( settings.open ) {
  //     // play the video when the iframe finishes loading
  //     iframe.on( 'load', function() {
  //       playVideo();
  //     });
  //   }
  //
  //   if (btn !== null) {
  //     // open the video on click on the btn
  //     attachOpenVideo( btn );
  //   }
  //
  //   attachCloseVideo( close.add( overlay ) );
  //
  //   // set window resize and trigger to init resize
  //   const win = $('window');
  //   win
  //     .on( 'resize', resizeVideo )
  //     .trigger( 'resize' );
  //
  //   function resizeVideo() {
  //     const win_width = win.width() - settings.minPaddingX,
  //       win_height = win.height() - settings.minPaddingY,
  //       win_ratio = win_width / win_height,
  //       ratio = settings.ratio;
  //
  //     if ( win_ratio > ratio ) {
  //       lightbox.height( win_height );
  //       lightbox.width( win_height * ratio );
  //     } else {
  //       lightbox.width( win_width );
  //       lightbox.height( win_width / ratio );
  //     }
  //
  //     // we use the original window width and height to not include padding
  //     // in the centering process
  //     lightbox.css( 'left', ( win.width() - lightbox.width() ) / 2 );
  //     lightbox.css( 'top', ( win.height() - lightbox.height() ) / 2 );
  //   }
  //
  //   function playVideo() {
  //     callPlayer( iframe[0], 'playVideo' );
  //     openVideo();
  //   }
  //
  //   function openVideo() {
  //     overlay
  //       .stop()
  //       .fadeIn( 'fast' );
  //     lightbox
  //       .stop()
  //       .fadeIn( 'fast' );
  //   }
  //
  //   function closeVideo() {
  //     overlay
  //       .stop()
  //       .fadeOut( 'fast' );
  //     lightbox
  //       .stop()
  //       .fadeOut( 'fast', function() {
  //         // Destroy video if it's not attached to anything
  //         // to prevent duplicates
  //         if ( btn === null && settings.open ) {
  //           overlay.remove();
  //           lightbox.remove();
  //         }
  //       });
  //   }
  //
  //   function attachOpenVideo( elem ) {
  //     elem.on( 'click', function( e ) {
  //       e.preventDefault();
  //       playVideo();
  //     });
  //   }
  //
  //   function attachCloseVideo( elem ) {
  //     elem.on( 'click', function( e ) {
  //       e.preventDefault();
  //       callPlayer(iframe[0], 'pauseVideo' );
  //       closeVideo();
  //     });
  //   }
  //
  //   function callPlayer( iframe, func, args ) {
  //     var message = JSON.stringify({
  //       "event": "command",
  //       "func": func,
  //       "args": args || []
  //     });
  //
  //     if ( iframe.src.indexOf( "youtube.com/embed" ) !== -1) {
  //       iframe.contentWindow.postMessage( message, "*" );
  //     }
  //   }
  // }
}
