import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };
  formErrors = {
    'email': '',
    'password': ''
  };

  validationMessages = {
    'email': {
      'required':      'Email is required.',
      'email':         'Email must be a valid email'
    },
    'password': {
      'required':      'Password is required.',
      'pattern':       'Password must be include at one letter and one number.',
      'minlength':     'Password must be at least 4 characters long.',
      'maxlength':     'Password cannot be more than 40 characters long.',
    }
  };

  newUser: boolean = true; // to toggle login or signup form
  passReset: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    
  }

  ngOnInit() {
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
