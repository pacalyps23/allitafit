import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable()
export class AuthService {
  private user: User;
  private admin: boolean = false;


  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    firebaseAuth.authState.subscribe(user => {
      if(user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      }else{
        localStorage.setItem('user', null);
      }
    });
  }

  async signInWithFacebook() {
    try{
       await this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
       this.router.navigate(['/home']);
    }catch(e){
      alert("Login Error: " + e.message);
    }
   
  }

  async signInWithGoogle() {
    try{
      await this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.router.navigate(['/home']);
    }catch(e){
      alert("Login Error: " + e.message);
    }
    
  }

  async signInRegular(email, password) {
    try {
      const credential = firebase.auth.EmailAuthProvider.credential(email, password);
      await this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/home'])
    }catch(e){
      alert("Login Error: " + e.message);
    }
    
  }


   isLoggedIn() {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }


  async logout() {
    console.log("Logging off");
    await this.firebaseAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
