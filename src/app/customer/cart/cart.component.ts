import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../cart.service';
import {MenuItem} from '../menu-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  itemList: Array<MenuItem>;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getItems().subscribe(
      itemList => this.itemList = itemList
    );
  }

  openCheckout() {
    this.router.navigateByUrl('/checkout');
  }
}
