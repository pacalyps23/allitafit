import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mySlideImages;
  mySlideOptions={items: 3, dots: false, nav: true};
  myCarouselOptions={items: 3, dots: true, nav: true};
  public mobileWidth;
  public mobileMarg;

  constructor(private sanitizer: DomSanitizer, private auth: AuthService) { 
    this.mySlideImages = [
      sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/aV9wRW2kFLk"),
      sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/t21UVXqdIF8"),
      sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/F_rsREk7MAg"),
      sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/O0ZZCWCoP-4"),
      sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/MOyVEX61mEI"),
      sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/myrKcdIheMw"),
    ]
  }

  ngOnInit() {
    if(this.auth.isMobile()){
      this.mobileWidth = { "width": "900px",};
      this.mobileMarg = { "margin": "20px"};
    }
  }

}
