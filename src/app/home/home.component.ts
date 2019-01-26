import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mySlideImages;
  myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
  mySlideOptions={items: 3, dots: false, nav: true};
  myCarouselOptions={items: 3, dots: true, nav: true};


  constructor(private sanitizer: DomSanitizer) { 
    this.mySlideImages = [
      sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/F_rsREk7MAg"),
      sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/O0ZZCWCoP-4"),
      sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/MOyVEX61mEI")
    ];
  }

  ngOnInit() {
  }

}
