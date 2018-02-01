import { CategoriesService } from './../../services/categories.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit ,NgModule } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  category;
  constructor(private categoriesService : CategoriesService , 
              private  router : Router) {
    this.category= {
      name:""
    }
   }

  ngOnInit() {
  }

  submit(f) {
    
    console.log(this.category);
    this.categoriesService.createCategory(this.category)
      .subscribe(res => {
        console.log("success----",res)
        this.router.navigate(["/admin/categories-list"])} ,
                  err => console.log("err ---- ",err));
  }

}
