import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const checkoutMethodList = $('.checkout-method-list li');
    checkoutMethodList.on('click', function() {
      const form = $(this).data('form');
      if( !$(this).hasClass('active') ) {
        $('.checkout-method-list li').removeClass('active');
        $(this).addClass('active');
        $('.checkout-method form').slideUp(500);
        $('.' + form).delay(500).slideDown();
      }
    });
    const paymentMethodList = $('.payment-method-list li');
    const paymentFormToggle = $('.payment-form-toggle');
    const paymentForm = $('.payment-form');
    paymentMethodList.on('click', function(){
      paymentMethodList.removeClass('active');
      $(this).addClass('active');
      if ( $(this).hasClass('payment-form-toggle') ) {
        paymentForm.slideDown();
      } else {
        paymentForm.slideUp();
      }
    });
  }

  onShippingFormToggle() {
    const shippingFormToggle = $('.shipping-form-toggle');
    const shippingForm = $('.shipping-form');
    if ( shippingFormToggle.hasClass('active') ) {
      shippingFormToggle.removeClass('active');
      shippingForm.slideUp();
    } else {
      shippingFormToggle.addClass('active');
      shippingForm.slideDown();
    }
  }
}
