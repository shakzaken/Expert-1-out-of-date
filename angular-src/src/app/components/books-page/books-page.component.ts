

import { NavService } from './../../services/nav.service';
import { CartService } from './../../services/cart.service';
import { CategoriesService } from './../../services/categories.service';
import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { Book,CartBook } from '../../models/books';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {


  books : any[];
  categories : any[];
  categoriesForView : any[];
  numberOfRows: number;
  

  constructor(
    private booksService : BooksService,
    private categoriesService : CategoriesService ,
    private cartService : CartService,
    private navService: NavService) { }

  ngOnInit() {
    this.navService.checkUrl();
    this.booksService.getBooks()
      .subscribe((books:any[]) => {
        this.insertBooksForView(books); 
     
      });
     this.categoriesService.getCategories()
        .subscribe((categories:any[]) =>{
            this.categories = categories;
            var limit = 5;
            this.categoriesForView = [];
            for(var i = 0 ; i < limit && i<categories.length ; i++)  {
              this.categoriesForView[i] = this.categories[i];
            }
        });   
       
  }

  // filterCategory(categoryId) {
  //   let array = this.allBooks.filter((value)=>{
  //     return value.categoryId == categoryId;
  //   });
  //   this.books = array;
  // }

  // unFilter() {
  //   this.books = this.allBooks;
  // }


    addToCart(book : CartBook) {
      let quantity = this.cartService.addToCart(book);
      this.books.forEach((bookInArr) =>{
        if(book.id == bookInArr.id){
          bookInArr.quantity = quantity;
        }
      });
     
    }
    decToCart(book : CartBook) {
      let quantity = this.cartService.decToCart(book);
      this.books.forEach((bookInArr) =>{
        if(book.id == bookInArr.id){
          bookInArr.quantity = quantity;
        }
      });
     
    }
  
    getBookQuantity(id){
      let res = this.books.find((book)=>{
        return book.id == id;
      });
      
      return res.quantity;
    }

  private insertBooksForView(books){

    let newBook: CartBook;
    this.books= [];

    for(let book of books){
         newBook = {
          id : book._id,
          name : book.name,
          categoryId : '',
          price : book.price,
          quantity : 0,
          pictureUrl: book.pictureUrl
        };
        this.books.push(newBook);
        this.checkBooksQuantity();
    }

  
 }

 private checkBooksQuantity(){
   let arr = JSON.parse(localStorage.getItem('myCart'));
   if(arr == undefined) return;
   this.books.forEach((book) =>{
      arr.forEach((item)=>{
        if(book.id == item.id){
          book.quantity = item.quantity;
        }
      });
   });
   
 }

}


