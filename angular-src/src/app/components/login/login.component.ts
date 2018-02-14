import { NavService } from './../../services/nav.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { loginUser } from '../../models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser : loginUser;
  errors : any[];

  constructor(
    private authService : AuthService,
    private router : Router,
    private flashMessagesService: FlashMessagesService,
    private navService: NavService) {
      this.loginUser = {
        email:'',
        password:''
      }
    
   }

  ngOnInit() {
    this.errors = [];
    this.navService.checkUrl();
    console.log( this.navService.getUrl());
  }

  submit() {
    
      
    this.authService.authenticateUser(this.loginUser)
      .subscribe((res:any) =>{
        if(res.success){
          this.authService.storeUserData(res.token,res.user);
          this.router.navigate(['/']);
        }else{
          console.log(res.msg);
          this.router.navigate(['login']);
          this.flashMessagesService.show(res.msg,{cssClass: 'flash-error',timeout: 4000});
        }

      });
    
  }

}
