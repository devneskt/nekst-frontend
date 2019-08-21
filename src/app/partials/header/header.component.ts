import {Component, HostListener, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {CartService} from '../../customer/cart.service';
import {MenuItem} from '../../customer/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemList: Array<MenuItem>;
  isMobile = false;
  meanScreenWidth = 991;
  menuOn = false;
  meanMenuExist = false;
  meanRevealColour = '';
  meanRevealPos = '';
  currentWidth: number;
  private meanContainer: any;
  private meanMenu: any;
  private meanDisplay: any;
  private removeElements: any;
  private defaults = {
    // meanMenuTarget: jQuery(this), // Target the current HTML markup you wish to replace
    meanMenuContainer: 'body', // Choose where meanmenu will be placed within the HTML
    meanMenuClose: 'X', // single character you want to represent the close menu button
    meanMenuCloseSize: '18px', // set font size of close button
    meanMenuOpen: '<span /><span /><span />', // text/markup you want when menu is closed
    meanRevealPosition: 'right', // left right or center positions
    meanRevealPositionDistance: '0', // Tweak the position of the menu
    meanRevealColour: '', // override CSS colours for the reveal background
    meanScreenWidth: '480', // set the screen width you want meanmenu to kick in at
    meanNavPush: '', // set a height here in px, em or % if you want to budge your layout now the navigation is missing.
    meanShowChildren: true, // true to show children in the menu, false to hide them
    meanExpandableChildren: true, // true to allow expand/collapse children
    meanExpand: '+', // single character you want to represent the expand for ULs
    meanContract: '-', // single character you want to represent the contract for ULs
    meanRemoveAttrs: false, // true to remove classes and IDs, false to keep them
    onePage: false, // set to true for one page sites
    meanDisplay: 'block', // override display method for table cell based layouts e.g. table-cell
    removeElements: '' // set to hide page elements
  };

  constructor(private cartService: CartService) { }

  ngOnInit() {
    // meanMenuClose: 'X',
    // meanMenuCloseSize: '18px',
    // meanScreenWidth: '991',
    // meanExpandableChildren: true,
    // meanMenuContainer: '.mobile-menu',
    // onePage: true
    this.meanContainer = '.mobile-menu';

    this.cartService.getItems().subscribe(
      itemList => this.itemList = itemList
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const stickyMenu = $('.sticky__header');
    const pos = stickyMenu.position();
    if (stickyMenu.length) {
      const windowPos = $(window).scrollTop();
      if (windowPos > pos.top + 250) {
        stickyMenu.addClass('is-sticky');
      } else {
        stickyMenu.removeClass('is-sticky');
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.currentWidth = window.innerWidth || document.documentElement.clientWidth;
    // console.log(currentWidth);

    if (!this.isMobile) {
      this.meanOriginal();
      if (this.currentWidth <= this.meanScreenWidth) {
        this.showMeanMenu();
        this.meanCentered();
      }
    } else {
      this.meanCentered();
      if (this.currentWidth <= this.meanScreenWidth) {
        if (this.meanMenuExist === false) {
          this.showMeanMenu();
        }
      } else {
        this.meanOriginal();
      }
    }
  }

  private meanCentered() {

  }

  private showMeanMenu() {
    // meanMenuClose: 'X',
    // meanMenuCloseSize: '18px',
    // meanScreenWidth: '991',
    // meanExpandableChildren: true,
    // meanMenuContainer: '.mobile-menu',
    // onePage: true
    // const defaults = {
    //   // meanMenuTarget: jQuery(this), // Target the current HTML markup you wish to replace
    //   meanMenuContainer: 'body', // Choose where meanmenu will be placed within the HTML
    //   meanMenuClose: 'X', // single character you want to represent the close menu button
    //   meanMenuCloseSize: '18px', // set font size of close button
    //   meanMenuOpen: '<span /><span /><span />', // text/markup you want when menu is closed
    //   meanRevealPosition: 'right', // left right or center positions
    //   meanRevealPositionDistance: '0', // Tweak the position of the menu
    //   meanRevealColour: '', // override CSS colours for the reveal background
    //   meanScreenWidth: '480', // set the screen width you want meanmenu to kick in at
    //   meanNavPush: '', // set a height here in px, em or % if you want to budge your layout now the navigation is missing.
    //   meanShowChildren: true, // true to show children in the menu, false to hide them
    //   meanExpandableChildren: true, // true to allow expand/collapse children
    //   meanExpand: '+', // single character you want to represent the expand for ULs
    //   meanContract: '-', // single character you want to represent the contract for ULs
    //   meanRemoveAttrs: false, // true to remove classes and IDs, false to keep them
    //   onePage: false, // set to true for one page sites
    //   meanDisplay: 'block', // override display method for table cell based layouts e.g. table-cell
    //   removeElements: '' // set to hide page elements
    // };
    // const meanStyles = 'background:' + this.meanRevealColour + ';color:' + this.meanRevealColour + ';' + this.meanRevealPos;
    // if (this.currentWidth <= this.meanScreenWidth) {
    //   $(removeElements).addClass('mean-remove');
    //   this.meanMenuExist = true;
    //   // add class to body so we don't need to worry about media queries here, all CSS is wrapped in '.mean-container'
    //   $(meanContainer).addClass('mean-container');
    //   $('.mean-container')
    //     .prepend(
    //       '<div class="mean-bar">' +
    //       '<a href="#nav" class="meanmenu-reveal" style="' + meanStyles + '">Show Navigation</a><nav class="mean-nav"></nav>' +
    //       '</div>');
    //
    //   // push meanMenu navigation into .mean-nav
    //   const meanMenuContents = $(meanMenu).html();
    //   $('.mean-nav').html(meanMenuContents);
    //
    //   // remove all classes from EVERYTHING inside meanmenu nav
    //   if (meanRemoveAttrs) {
    //     $('nav.mean-nav ul, nav.mean-nav ul *').each(function() {
    //       // First check if this has mean-remove class
    //       if ($(this).is('.mean-remove')) {
    //         $(this).attr('class', 'mean-remove');
    //       } else {
    //         $(this).removeAttr('class');
    //       }
    //       $(this).removeAttr('id');
    //     });
    //   }
    //
    //   // push in a holder div (this can be used if removal of nav is causing layout issues)
    //   $(meanMenu).before('<div class="mean-push" />');
    //   $('.mean-push').css('margin-top', meanNavPush);
    //
    //   // hide current navigation and reveal mean nav link
    //   $(meanMenu).hide();
    //   $('.meanmenu-reveal').show();
    //
    //   // turn 'X' on or off
    //   $(meanRevealClass).html(meanMenuOpen);
    //   $navreveal = $(meanRevealClass);
    //
    //   // hide mean-nav ul
    //   $('.mean-nav ul').hide();
    //
    //   // hide sub nav
    //   if (meanShowChildren) {
    //     // allow expandable sub nav(s)
    //     if (meanExpandableChildren) {
    //       $('.mean-nav ul ul').each(function() {
    //         if ($(this).children().length) {
    //           $(this, 'li:first').parent().append('<a class="mean-expand" href="#" style="font-size: ' + meanMenuCloseSize + '">' + meanExpand + '</a>');
    //         }
    //       });
    //       $('.mean-expand').on('click', function(e) {
    //         e.preventDefault();
    //         if ($(this).hasClass('mean-clicked')) {
    //           $(this).text(meanExpand);
    //           $(this).prev('ul').slideUp(300, function() {});
    //         } else {
    //           $(this).text(meanContract);
    //           $(this).prev('ul').slideDown(300, function() {});
    //         }
    //         $(this).toggleClass('mean-clicked');
    //       });
    //     } else {
    //       $('.mean-nav ul ul').show();
    //     }
    //   } else {
    //     $('.mean-nav ul ul').hide();
    //   }
    //
    //   // add last class to tidy up borders
    //   $('.mean-nav ul li').last().addClass('mean-last');
    //   $navreveal.removeClass('meanclose');
    //   $($navreveal).click(function(e) {
    //     e.preventDefault();
    //     if ( menuOn === false ) {
    //       $navreveal.css('text-align', 'center');
    //       $navreveal.css('text-indent', '0');
    //       $navreveal.css('font-size', meanMenuCloseSize);
    //       $('.mean-nav ul:first').slideDown();
    //       menuOn = true;
    //     } else {
    //       $('.mean-nav ul:first').slideUp();
    //       menuOn = false;
    //     }
    //     $navreveal.toggleClass('meanclose');
    //     meanInner();
    //     $(removeElements).addClass('mean-remove');
    //   });
    //
    //   // for one page websites, reset all variables...
    //   if ( onePage ) {
    //     $('.mean-nav ul > li > a:first-child').on( 'click' , function() {
    //       $('.mean-nav ul:first').slideUp();
    //       menuOn = false;
    //       $($navreveal).toggleClass('meanclose').html(meanMenuOpen);
    //     });
    //   }
    // } else {
    //   this.meanOriginal();
    // }
  }

  private meanOriginal() {
    $('.mean-bar,.mean-push').remove();
    $(this.meanContainer).removeClass('mean-container');
    $(this.meanMenu).css('display', this.meanDisplay);
    this.menuOn = false;
    this.meanMenuExist = false;
    $(this.removeElements).removeClass('mean-remove');
  }

  openAuthBox(event: any) {
    event.preventDefault();
    const container = $('.accountbox-wrapper');
    container.addClass('is-visible');
  }

  openCartBox(event: any) {
    event.preventDefault();
    const container = $('.cartbox-wrap');
    container.toggleClass('is-visible');
  }
}
