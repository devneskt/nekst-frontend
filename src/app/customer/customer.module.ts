import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {HomeComponent} from './home/home.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {MenuComponent} from './menu/menu.component';
import {BreadCrumbComponent} from './partials/breadcaump/bread-crumb.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ServicesComponent} from './services/services.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    GalleryComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    AboutComponent,
    BreadCrumbComponent,
    MenuDetailComponent,
    PageNotFoundComponent,
    CartComponent,
    CheckoutComponent,
  ],
  exports: [
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    NgxPaginationModule,
    CustomerRoutingModule,
    FontAwesomeModule
  ]
})
export class CustomerModule { }
