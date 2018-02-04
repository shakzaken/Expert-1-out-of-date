import { config } from './../config/config';
import { Injectable } from '@angular/core';


@Injectable()
export class CartService {

  public cartBooks : any[];
  

  constructor() {
    this.cartBooks = [];
   }

   getMyCart(){
     return JSON.parse(localStorage.getItem('myCart'));
   }

   addToCart(i) {
    let arr = JSON.parse( localStorage.getItem('myCart'));
    arr[i].quantity = arr[i].quantity + 1;
    localStorage.setItem('myCart',JSON.stringify(arr));
    this.updateStorage();
    return arr;
  }
  decToCart(i) {
    let arr = JSON.parse( localStorage.getItem('myCart'));
    if(arr[i].quantity > 0) {
      arr[i].quantity = arr[i].quantity + -1;
      localStorage.setItem('myCart',JSON.stringify(arr));
      this.updateStorage();
      return arr;
    }
  }


   updateStorage() {
    this.cartBooks = JSON.parse(localStorage.getItem('myCart'));
  }

   initStorage(allBooks) {
    let arr = [];
    allBooks.forEach((val,index) => {
      arr.push({
          index:index ,
          quantity:0 ,
          bookName: val.name,
          price: val.price,
          bookId: val._id
        });
    });

    localStorage.setItem('myCart',JSON.stringify(arr));
    this.updateStorage();
    return arr;
  }

  

}
