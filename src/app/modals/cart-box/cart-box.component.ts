import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {CartService} from '../../customer/cart.service';
import {MenuItem} from '../../customer/menu-item';

@Component({
  selector: 'app-cart-box',
  templateUrl: './cart-box.component.html',
  styleUrls: ['./cart-box.component.scss']
})
export class CartBoxComponent implements OnInit {

  itemList: Array<MenuItem>;
  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getItems().subscribe(
      itemList => this.itemList = itemList
    );
  }

  closeBox() {
    const container = $('.cartbox-wrap');
    container.removeClass('is-visible');
  }

  openCart() {
    this.closeBox();
    this.router.navigateByUrl('/cart');
  }

  openCheckout() {
    this.closeBox();
    this.router.navigateByUrl('/checkout');
  }

  removeItem(event, item: MenuItem) {
    this.cartService.removeItem(item);
  }
}
