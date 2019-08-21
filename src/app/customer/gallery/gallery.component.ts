import {Component, OnInit} from '@angular/core';
import {faEye, faLink} from '@fortawesome/free-solid-svg-icons';
import {Gallery} from '../gallery';
import {GalleryService} from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  faEye = faEye;
  faLink = faLink;
  galleries: Gallery[];

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit() {
    this.galleryService.getGalleries().subscribe(
      galleries => this.galleries = galleries
    );
  }

}
