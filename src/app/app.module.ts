import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {IsotopeModule} from 'ngx-isotope';
import {NgwWowModule} from 'ngx-wow';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CareersComponent } from './careers/careers.component';
import { PressComponent } from './press/press.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AccountBoxComponent } from './modals/account-box/account-box.component';
import { CartBoxComponent } from './modals/cart-box/cart-box.component';
import { ScrollTopComponent } from './partials/scroll-top/scroll-top.component';
import { CustomerModule } from './customer/customer.module';

@NgModule({
  declarations: [
    AppComponent,
    CareersComponent,
    PressComponent,
    HeaderComponent,
    FooterComponent,
    AccountBoxComponent,
    CartBoxComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    IsotopeModule,
    NgwWowModule,
    CarouselModule,
    CustomerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
