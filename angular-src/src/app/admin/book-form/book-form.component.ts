import { BooksService } from './../../services/books.service';
import { element } from 'protractor';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/books'
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  categories : any[];
  book:any;
  errors : any[];
    
  constructor(  private categoriesService : CategoriesService , 
                private booksService : BooksService ,
                private router: Router) 
  {

    this.book = {
      id:0,
      name:"",
      description:"",
      pictureUrl:"",
      categoryId:"",
      price: null ,
      quantity: null,
      date: null
    }
      
   }

  ngOnInit() {
     var $: any;
    this.categoriesService.getCategories()
      .subscribe((res:any[]) => this.categories = res);
     this.errors = [];
      
  }

  submit(f) {
    this.errors = [];
    console.log(f);
    console.log(this.book);
    if(this.book.price > 1000) {
      this.errors.push("price should be lower than 1000");
      return;
    }
    if(this.book.quantity > 1000) {
      this.errors.push("quantity should be lower than 1000");
      return;
    }
    if(this.book.categoryId == 0) {
      this.errors.push("book category is required");
      return;
    }
      
    this.booksService.createBook(this.book)
      .subscribe(res => {
        console.log("Success", res);
        this.router.navigate(["/admin/books-list"]);

      },
    err => {
      console.log("err",err);
    })
  }
  
  func(p) {
    console.log(p);
  }
  

}


