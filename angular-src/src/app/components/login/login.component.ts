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

  constructor(private authService : AuthService ,private router : Router) {
    this.loginUser = {
      email:'',
      password:''
    }
    
   }

  ngOnInit() {
    this.errors = [];
  }

  submit() {
    
    //  this.authService.login(this.loginUser)
    //  .subscribe(res => {
    //   if(res) {
    //     localStorage.setItem("user",JSON.stringify(res));
    //     this.router.navigate(["/"]);
    //     location.reload();
    //   }
      
    // } , err =>{
    //   console.log( "err ",err);
    //   this.errors.push(err.error);
    // });  
      
    this.authService.authenticateUser(this.loginUser)
      .subscribe((res:any) =>{
        if(res.success){
          this.authService.storeUserData(res.token,res.user);
          this.router.navigate(['/']);
        }else{
          console.log(res.msg);
          this.router.navigate(['login']);
        }

      });
    
  }

}
