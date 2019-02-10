import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  public userDetails: firebase.User = null;
  public admin: boolean = false;


  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        }
        else {
          this.userDetails = null;
        }
      });
  }

  signInWithFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);

    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }


  isLoggedIn() {
    if (this.userDetails == null) {
      console.log("nog logged in");
      return false;
    } else {
      console.log(this.userDetails.email);
      this.isAdmin();
      return true;
    }
  }


  logout() {
    console.log("logging out");
    this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }

  isAdmin() {
    if (this.userDetails.email == "allavasylyga@gmail.com" ||
      this.userDetails.email == "pacalyps85@gmail.com") {
        console.log("is admin");
      return true;
    }
    console.log("not admin");
    return false;

  }

}
