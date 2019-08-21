import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../menu-item';
import {MenuService} from '../menu.service';
import {PaginationInstance} from 'ngx-pagination';
import {Router} from '@angular/router';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: MenuItem[];
  p = 1;

  constructor(private menuService: MenuService,
              private cartService: CartService,
              private router: Router) {
  }

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 9,
    currentPage: 1,
  };
  labels: any = {
    previousLabel: '<i class="zmdi zmdi-chevron-left"></i>'
  };

  ngOnInit() {
    this.menuService.getMenu().subscribe(
      menu => this.menu = menu
    );
  }

  addToCart($event, item) {
    // console.log(item);
    this.cartService.addItem(item);
    // this.router.navigateByUrl('/cart');
  }
}
