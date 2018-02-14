import { CartBook } from './../models/books';
import { config } from './../config/config';
import { Injectable } from '@angular/core';


@Injectable()
export class CartService {

  constructor() {}
   
   getMyCart(){
     return JSON.parse(localStorage.getItem('myCart'));
   }

   addToCart(book : CartBook) {
    let arr;
    let bookIndex;
    let quantity;

    arr = JSON.parse(localStorage.getItem('myCart'));
    if(arr == null){
      arr = [];
    }
    bookIndex = arr.findIndex((bookVal)=>{
      return bookVal.id == book.id
    });
    if(bookIndex != -1){
      arr[bookIndex].quantity += 1;
      quantity = arr[bookIndex].quantity;
    }else{
      book.quantity+=1;
      arr.push(book);
      quantity = book.quantity;
    }
    localStorage.setItem('myCart',JSON.stringify(arr));
    return quantity;
  }

  
  decToCart(book: CartBook) {
    let arr;
    let bookIndex;
    let quantity = 0;

    arr = JSON.parse(localStorage.getItem('myCart'));
    if(arr == null){
      return quantity;
    }
    bookIndex = arr.findIndex((bookVal)=>{
      return bookVal.id == book.id
    });
    if(bookIndex != -1){
      arr[bookIndex].quantity -= 1;
      quantity = arr[bookIndex].quantity;
      if(quantity == 0){
        arr.splice(bookIndex,1);
      }
    }
    localStorage.setItem('myCart',JSON.stringify(arr));
    return quantity;
  }



}
