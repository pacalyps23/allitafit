import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public isLogged;
  public email;
  public isAdmin=false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private auth: AuthService,
  ) {
    if(auth.getUser() == null || auth.getUser() == undefined){
        this.email = ""
    }else{
      this.email = auth.getUser().email;
    }
  }

  
  
  ngOnInit() {
    this.isLogged = this.auth.isLoggedIn();
    
  }

  logout(){
    this.auth.logout();
  }

}
