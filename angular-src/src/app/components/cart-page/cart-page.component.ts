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
    private ordersService: OrdersService) { }

  ngOnInit() {
    this.myCart = this.cartService.getMyCart();
    this.smallCart = this.myCart.filter((value) =>{
      return value.quantity > 0 ;
    });
    this.total = 0;
    this.smallCart.forEach(item => {
      this.total += item.price *item.quantity;
    });
  }


  onSubmit(){
    this.ordersService.saveOrder(this.smallCart)
      .subscribe(order =>{
        console.log(order);
      }, err =>{
        console.log(err);
      });
  }



}// end component.
