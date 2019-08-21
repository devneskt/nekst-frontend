import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../menu-item';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../menu.service';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {
  menuItem: MenuItem;
  faStar = faStar;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.menuService.getMenuItem(id)
      .subscribe(menuItem => this.menuItem = menuItem);
    $('.cart-plus-minus').append('<div class="dec qtybutton">-</i></div><div class="inc qtybutton">+</div>');
    $('.qtybutton').on('click', function() {
      const $button = $(this);
      let newVal;
      const oldValue = $button.parent().find('input').val();
      if ($button.text() === '+') {
        newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 1) {
          newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find('input').val(newVal);
    });
  }

}
