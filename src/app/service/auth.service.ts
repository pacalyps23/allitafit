import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app';
import { User } from 'firebase';

@Injectable()
export class AuthService {
  private user: User;
  private admin: boolean = false;


  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    firebaseAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async signInWithFacebook() {
    try {
      await this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
      this.router.navigate(['/home']);
    } catch (e) {
      alert("Login Error: " + e.message);
    }

  }

  async signInWithGoogle() {
    try {
      await this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.router.navigate(['/home']);
    } catch (e) {
      alert("Login Error: " + e.message);
    }

  }

  async signInRegular(email, password) {
    try {
      await this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/home'])
    } catch (e) {
      alert("Login Error: " + e.message);
    }
  }

  async register(email: string, password: string) {
    try {
      await this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
      this.router.navigate(['/home']);
      this.sendEmailVerification();
    } catch (e) {
      alert("Loggin Error: " + e.message);
    }
  }

  async sendEmailVerification() {
    await this.firebaseAuth.auth.currentUser.sendEmailVerification()
    location.reload();
  }


  isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }


  async logout() {
    await this.firebaseAuth.auth.signOut();
    localStorage.removeItem('user');
    location.reload();
  }

 

}
