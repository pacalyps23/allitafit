import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
mySlideImages = [1,2,3].map((i)=> `https://picsum.photos/640/480?image=${i}`);
myCarouselImages =[];
mySlideOptions={items: 3, dots: false, nav: true};
myCarouselOptions={items: 3, dots: true, nav: true};

  constructor() {
    this.myCarouselImages.push("../../assets/img/dumbTricep.jpg");
    this.myCarouselImages.push("../../assets/img/plank.jpg");
    this.myCarouselImages.push("../../assets/img/cableLat.jpg");
    this.myCarouselImages.push("../../assets/img/dumbCurl.jpg");
   }

  ngOnInit() {

  }

}
