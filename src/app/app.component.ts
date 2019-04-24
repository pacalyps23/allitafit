import { Component, OnInit, HostBinding } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { AuthService } from './service/auth.service';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  public width=1080;
  title = 'app';
  public isLogged;
  public email;
  public isAdmin = false;
  public mobile = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private auth: AuthService,
    private router: Router,
  ) {
    if(auth.getUser() == null || auth.getUser() == undefined){
        this.email = ""
    }else{
      let user = auth.getUser();
      this.email = auth.getUser().email;
      if(environment.admins.includes(user.uid)){
        this.isAdmin = true;
      }
    }
  }

  
  
  ngOnInit() {
    this.isLogged = this.auth.isLoggedIn();

  }

  logout(){
    this.router.navigate(['/login'])
    this.auth.logout();
  }

}
