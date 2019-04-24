import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mySlideImages;
  mySlideOptions={items: 3, dots: false, nav: true};
  myCarouselOptions={items: 3, dots: true, nav: true};


  constructor(private sanitizer: DomSanitizer) { 
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
  }

}
