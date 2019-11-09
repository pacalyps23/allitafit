import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mobileWidth;
  private user = {
    email: '',
    password: ''
  };

  newUser: boolean = true; // to toggle login or signup form
  passReset: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    
  }

  ngOnInit() {
    if(this.authService.isMobile()){
      this.mobileWidth = {
        "width": "900px",
      }
    }
  }

    signInWithFacebook() {
      this.authService.signInWithFacebook()
      .then((res) => {
          location.reload();
        })
      .catch((err) => console.log(err));
    }


    signInWithGoogle() {
      this.authService.signInWithGoogle()
      .then((res) => {
          location.reload();
        })
      .catch((err) => console.log(err));
    }

    signInWithEmail(user){
      this.authService.signInRegular(user.email, user.password).
      then((res) => {
        location.reload();
      }).catch((err)=>console.log(err));
    }

    createAccount(user){
      this.authService.register(user.email, user.password).
      then((res)=> {
        
      }).catch((err)=> console.log(err));
    }

    toggleForm(): void {
      this.newUser = !this.newUser;
    }

}
