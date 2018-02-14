import { Router } from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { OrdersService } from './../../services/orders.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  myCart;
  smallCart;
  total:number;
  order;
  constructor(
    private cartService : CartService,
    private ordersService: OrdersService,
    private flashMessagesService: FlashMessagesService,
    private router : Router) { }

  ngOnInit() {
    this.myCart = this.cartService.getMyCart();
    if(this.myCart == null){
      this.myCart = [];
    }
    this.smallCart = this.myCart;
    this.total = 0;
    this.smallCart.forEach(item => {
      this.total += item.price *item.quantity;
    });
  }


  onSubmit(){
    this.ordersService.saveOrder(this.smallCart)
      .subscribe(order =>{
        this.router.navigate(['orders']);
        this.flashMessagesService.show('order completed!',{cssClass:'flash-success',timeout:4000});
        this.clearCart();
        
      }, err =>{
        console.log(err);
      });
  }



  clearCart(){
    localStorage.removeItem('myCart');
    this.ngOnInit();
  }



}// end component.
