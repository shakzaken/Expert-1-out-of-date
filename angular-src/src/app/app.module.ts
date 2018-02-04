import { CartService } from './services/cart.service';
import { BooksService } from './services/books.service';
import { CategoriesService } from './services/categories.service';
import { AuthService } from './services/auth.service';
import { HttpClient } from 'selenium-webdriver/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { Component } from '@angular/core/src/metadata/directives';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './services/user.service';
import { PanelComponent } from './admin/panel/panel.component';
import { HomeComponent } from './components/home/home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { BookFormComponent } from './admin/book-form/book-form.component';
import { CategoryFormComponent } from './admin/category-form/category-form.component';
import { CategoriesListComponent } from './admin/categories-list/categories-list.component';

import {MatCheckboxModule, MatCheckbox} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { BooksListComponent } from './admin/books-list/books-list.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { CoursesComponent } from './components/courses/courses.component';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { OrdersService } from './services/orders.service';


const appRoutes : Routes = [
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent},
  {path:'courses',component: CoursesComponent},
  {path:'cart',component: CartPageComponent},

  {path:'admin/:name',component: PanelComponent},
  {path:'admin',component: PanelComponent},
  {path: '',component: BooksPageComponent}
  


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    PanelComponent,
    HomeComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    BookFormComponent,
    CategoryFormComponent,
    CategoriesListComponent,
    BooksListComponent,
    UsersListComponent,
    CoursesComponent,
    BooksPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [
    UserService,
    AuthService,
    CategoriesService,
    BooksService,
    CartService,
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
