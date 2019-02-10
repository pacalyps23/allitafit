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
  private isLogged;
  private isAdmin;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private auth: AuthService,
  ) {}

  
  
  ngOnInit() {
    this.isLogged = this.auth.isLoggedIn();
    if(this.isLogged){
      this.isAdmin = this.auth.isAdmin();
    }
  }

  logout(){
    this.auth.logout();
  }

}
