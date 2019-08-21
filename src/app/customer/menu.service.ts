import { Injectable } from '@angular/core';
import {MenuItem} from './menu-item';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private MENU: MenuItem[] = [
    {
      id: 1,
      title: 'Beef Burger',
      description: 'If you\'re going to splurge on take-out, at least supplement it with a home-cooked, healthy side.',
      price: 50,
      oldPrice: 50,
      imageUrl: 'assets/images/menu-grid/1.jpg',
      isSpecial: true,
    },
    {
      id: 2,
      title: 'Salman With Tomato',
      description: 'If you\'re going to splurge on take-out, at least supplement it with a home-cooked, healthy side.',
      price: 50,
      oldPrice: 50,
      imageUrl: 'assets/images/menu-grid/2.jpg',
      isSpecial: false,
    },
    {
      id: 3,
      title: 'Salman With Tomato',
      description: 'If you\'re going to splurge on take-out, at least supplement it with a home-cooked, healthy side.',
      price: 50,
      oldPrice: 50,
      imageUrl: 'assets/images/menu-grid/3.jpg',
      isSpecial: false,
    },
    {
      id: 4,
      title: 'Thai Vegetable',
      description: 'If you\'re going to splurge on take-out, at least supplement it with a home-cooked, healthy side.',
      price: 50,
      oldPrice: 50,
      imageUrl: 'assets/images/menu-grid/4.jpg',
      isSpecial: false,
    },
    {
      id: 5,
      title: 'Fried Rice',
      description: 'If you\'re going to splurge on take-out, at least supplement it with a home-cooked, healthy side.',
      price: 50,
      oldPrice: 50,
      imageUrl: 'assets/images/menu-grid/5.jpg',
      isSpecial: true,
    },
    {
      id: 6,
      title: 'Asperagassr & Roasted Garlic',
      description: 'If you\'re going to splurge on take-out, at least supplement it with a home-cooked, healthy side.',
      price: 50,
      oldPrice: 50,
      imageUrl: 'assets/images/menu-grid/6.jpg',
      isSpecial: false,
    },
    {
      id: 7,
      title: 'crispy hearts of palm cakes',
      description: 'If you\'re going to splurge on take-out, at least supplement it with a home-cooked, healthy side.',
      price: 50,
      oldPrice: 50,
      imageUrl: 'assets/images/menu-grid/7.jpg',
      isSpecial: true,
    },
    {
      id: 8,
      title: 'Beef Burger',
      description: 'If you\'re going to splurge on take-out, at least supplement it with a home-cooked, healthy side.',
      price: 50,
      oldPrice: 50,
      imageUrl: 'assets/images/menu-grid/8.jpg',
      isSpecial: false,
    },
    {
      id: 9,
      title: 'Beef Burger',
      description: 'If you\'re going to splurge on take-out, at least supplement it with a home-cooked, healthy side.',
      price: 50,
      oldPrice: 50,
      imageUrl: 'assets/images/menu-grid/9.jpg',
      isSpecial: true,
    },
    {
      id: 10,
      title: 'Beef Burger',
      description: 'If you\'re going to splurge on take-out, at least supplement it with a home-cooked, healthy side.',
      price: 50,
      oldPrice: 50,
      imageUrl: 'assets/images/menu-grid/1.jpg',
      isSpecial: true,
    },
    {
      id: 11,
      title: 'Beef Burger',
      description: 'If you\'re going to splurge on take-out, at least supplement it with a home-cooked, healthy side.',
      price: 50,
      oldPrice: 50,
      imageUrl: 'assets/images/menu-grid/2.jpg',
      isSpecial: true,
    },
    {
      id: 12,
      title: 'Beef Burger',
      description: 'If you\'re going to splurge on take-out, at least supplement it with a home-cooked, healthy side.',
      price: 50,
      oldPrice: 50,
      imageUrl: 'assets/images/menu-grid/3.jpg',
      isSpecial: true,
    },
  ];

  constructor() { }

  getMenu(): Observable<MenuItem[]> {
    return of(this.MENU);
  }

  getMenuItem(id: number): Observable<MenuItem> {
    return of(this.MENU.find(menuItem => menuItem.id === id));
  }
}
