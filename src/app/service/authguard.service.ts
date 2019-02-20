import { Injectable } from '@angular/core';
import { Route, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(private auth: AuthService, private router:Router) {
  }

  canLoad(route: Route) {
    console.log(route);
    if(this.auth.isLoggedIn()){
      console.log("Hide login");
      this.router.navigate(['/home']);
      return false;
    }
    
    return true;
  }
}