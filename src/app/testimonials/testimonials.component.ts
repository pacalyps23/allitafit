import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  amaPics = [];
  chetPics = [];
  kikiPics = [];
  brucePics = [];
  naomiPics = [];
  amberPics = [];

  mySlideOptions = { items: 3, dots: false, nav: true };
  public myCarouselOptions = { items: 3, dots: true, nav: true };
  public show=false;

  constructor(private sanitizer: DomSanitizer) {

    this.amaPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/UeAjr2p25po"));
    this.chetPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/b-SVOkghCb4"));
    this.kikiPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/OrM-fcOhc-8"));
    this.brucePics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/dwDLnmQMWKI"));
    this.naomiPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/f5PQAwLApm4"));

    for(var i = 1; i < 3; i++){
      this.amaPics.push(`../../assets/img/ama/ama${i}.jpg`);
    }
    for(var i = 1; i < 4; i++){
      this.chetPics.push(`../../assets/img/chet/chet${i}.jpg`);
    }
    for(var i = 1; i < 6; i++){
      this.kikiPics.push(`../../assets/img/kiki/kiki${i}.jpg`);
    }
    for(var i = 1; i < 5; i++){
      this.brucePics.push(`../../assets/img/bruce/bruce${i}.jpg`);
    }

    for(var i = 1; i < 5; i++){
      this.naomiPics.push(`../../assets/img/naomi/naomi${i}.jpg`);
    }

    for(var i = 1; i < 3; i++){
      this.amberPics.push(`../../assets/img/amber/amber${i}.jpg`);
    }

  }

  ngOnInit() {
  }

  isValid(image) {
    if(typeof image === 'string'){
      return true;
    }
    return false;
  }

}
