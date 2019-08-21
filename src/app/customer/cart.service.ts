import { Injectable } from '@angular/core';
import {MenuItem} from './menu-item';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemList: Array<MenuItem> = [];

  constructor() { }

  getItems(): Observable<Array<MenuItem>> {
    return of(this.itemList);
  }

  addItem(item: MenuItem) {
    this.itemList.push(item);
  }

  removeItem(item: MenuItem) {
    const index: number = this.itemList.indexOf(item);
    if (index !== -1) {
      this.itemList.splice(index, 1);
    }
    // console.log(index);
  }

  getCount(): Observable<number> {
    return of(this.itemList.length);
    // if (this.itemList) {
    //   return this.itemList.length;
    // } else {
    //   return 0;
    // }
  }
}
