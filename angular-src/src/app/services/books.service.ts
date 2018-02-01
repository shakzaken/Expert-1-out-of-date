import { HttpClient } from '@angular/common/http';
import { config } from './../config/config';
import { Injectable } from '@angular/core';
import { Book } from '../models/books';

@Injectable()
export class BooksService {

  
  booksUrl;

  constructor(private http : HttpClient) {
    
    this.booksUrl = `${config.serverUrl}books`; 
   }


   public getBooks() {
     return this.http.get(this.booksUrl);
   }

   public createBook(book : Book)
   {
      return this.http.post(`${this.booksUrl}/add`,book);
   }
   public deleteBook(id : number) {
     return this.http.delete(this.booksUrl +'/'+id);
   }
  

}
