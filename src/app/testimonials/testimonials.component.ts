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
  mettyPics = [];
  indiaPics = [];
  pavPics = [];
  simonePics = [];
  tracyPics = [];
   
  mySlideOptions = { items: 3, dots: false, nav: true };
  public myCarouselOptions = { items: 3, dots: true, nav: true };
  public show=false;

  constructor(private sanitizer: DomSanitizer) {

    this.amaPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/UeAjr2p25po"));
    this.chetPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/b-SVOkghCb4"));
    this.kikiPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/OrM-fcOhc-8"));
    this.brucePics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/dwDLnmQMWKI"));
    this.naomiPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/f5PQAwLApm4"));
    this.mettyPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/VPM-dzrEx4E"));
    this.indiaPics.push(sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/qQ0bSwyVFgE"));

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

    for(var i = 1; i < 3; i++){
      this.mettyPics.push(`../../assets/img/metty/metty${i}.jpg`);
    }

    for(var i = 1; i < 4; i++){
      this.indiaPics.push(`../../assets/img/india/india${i}.jpg`);
    }

    for(var i = 1; i < 4; i++){
      this.pavPics.push(`../../assets/img/pav/pav${i}.jpg`);
    }

    for(var i = 1; i < 4; i++){
      this.simonePics.push(`../../assets/img/simone/sim${i}.jpg`);
    }

    for(var i = 1; i < 3; i++){
      this.tracyPics.push(`../../assets/img/tracy/tracy${i}.jpg`);
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
