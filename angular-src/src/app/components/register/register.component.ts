import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { Error } from './../../models/error.model';
import { User } from './../../models/user.model';
import { Component, OnInit ,NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User;
  errors : Error[];
 
  constructor(
    private userService : UserService,
    private router : Router,
    private authService: AuthService,
    private flashMessagesService: FlashMessagesService) { 
      this.user = {
        firstName: '',
        lastName : '',
        email : '',
        password : '',
        confirmPassword: '',
        id: 0
      }
  }

  submit(){
    if(this.user.password === this.user.confirmPassword) {
      console.log("good");
      this.deleteError("passwords");

      this.authService.registerUser(this.user)
        .subscribe(user =>{
          console.log(user);
          this.router.navigate(['/login']);
          this.flashMessagesService.show('You are Registered and can login',{cssClass: 'flash-success',timeout: 4000});
        },err =>{
          this.flashMessagesService.show(err.error,{cssClass: 'flash-error',timeout: 4000});
          //this.errors.push({name:"errorFromServer",msg:err.error});
        });

        
    } else {
      var passwordsError : Error = {
        name: 'passwords',
        msg: 'passwords dont match'
      }
      this.errors.push(passwordsError);
    }
    
    
  }

  onChange() {
    console.log(this.user);
  }

  ngOnInit() {
    this.errors = [];
  
  }

  private deleteError(name) {
    for(var i =0;i<this.errors.length ;i++) {
      if(this.errors[i].name == name )
      this.errors.splice(i,1);
    }
  }


}







