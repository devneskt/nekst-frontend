import { Injectable } from '@angular/core';
import {Gallery} from './gallery';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private GALLERIES: Gallery[] = [
    {
      id: 1,
      imageUrl: 'assets/images/gallery/portfolio/1.jpg',
    },
    {
      id: 2,
      imageUrl: 'assets/images/gallery/portfolio/2.jpg',
    },
    {
      id: 3,
      imageUrl: 'assets/images/gallery/portfolio/3.jpg',
    },
    {
      id: 4,
      imageUrl: 'assets/images/gallery/portfolio/4.jpg',
    },
    {
      id: 5,
      imageUrl: 'assets/images/gallery/portfolio/5.jpg',
    },
    {
      id: 6,
      imageUrl: 'assets/images/gallery/portfolio/6.jpg',
    },
    {
      id: 7,
      imageUrl: 'assets/images/gallery/portfolio/7.jpg',
    },
    {
      id: 8,
      imageUrl: 'assets/images/gallery/portfolio/8.jpg',
    },
  ];

  constructor() { }

  getGalleries(): Observable<Gallery[]> {
    return of(this.GALLERIES);
  }
}
