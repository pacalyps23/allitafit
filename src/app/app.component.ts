import { Component, OnInit, HostBinding } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {
  title = 'app';
  public isLogged;
  public email;
  public isAdmin = false;
  public mobile = false;
  public header;
  public social;
  

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private auth: AuthService,
    private router: Router,
  ) {
        
    if(auth.isMobile()){
     this.header = {
       "width": "900px",
     };
     this.social = {
       "position": "inherit",
       "text-align": "end"
     };

    }

    let user = auth.getUser();
    if(user == null || user == undefined){
      this.email = ""
    }else{
      this.email = user.email;
      this.isAdmin = auth.isAdmin();
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
