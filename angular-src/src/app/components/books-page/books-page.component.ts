import { CartService } from './../../services/cart.service';
import { CategoriesService } from './../../services/categories.service';
import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/books';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {

  booksForCart : {id:number,quantity:number}[];
  books : any[];
  categories : any[];
  allBooks : any[];
  categoriesForView : any[];
  numberOfRows: number;
  localBooks : any[];

  constructor(private booksService : BooksService,
              private categoriesService : CategoriesService ,
              private cartService : CartService) { }

  ngOnInit() {
    this.booksService.getBooks()
      .subscribe((books:any[]) => {
        this.books = books; 
        this.allBooks = books;
        this.localBooks = this.cartService.initStorage(this.books);
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

  filterCategory(categoryId) {
    let array = this.allBooks.filter((value)=>{
      return value.categoryId == categoryId;
    });
    this.books = array;
  }

  unFilter() {
    this.books = this.allBooks;
  }


    addToCart(i) {
      this.localBooks = this.cartService.addToCart(i);
    }
    decToCart(i) {
      this.localBooks = this.cartService.decToCart(i);
    }
  

 

}


