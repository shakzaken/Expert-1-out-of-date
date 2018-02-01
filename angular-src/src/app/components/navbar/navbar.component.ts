import { AuthService } from './../../services/auth.service';
import { User } from '../../models/user.model'

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user;
  
  constructor(private authService : AuthService , private router: Router) { }


  ngOnInit() {
    
    if(this.loggedIn()){
      this.user = JSON.parse(localStorage.getItem('user'));
    }

  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout() {
    this.authService.logout();
  }

}
