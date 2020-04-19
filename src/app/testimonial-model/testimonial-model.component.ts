import { Component, OnInit, Input } from '@angular/core';
import { Testimonial } from './testimonial.model';

@Component({
  selector: 'testimonial-model',
  templateUrl: './testimonial-model.component.html',
  styleUrls: ['./testimonial-model.component.css']
})
export class TestimonialModelComponent implements OnInit {
  @Input() testimonial: any; 
  public myCarouselOptions = { items: 1, dots: true, nav: true };

  constructor() { }

  ngOnInit() {
  }

  isValid(image) {
    if(typeof image === 'string'){
      return true;
    }
    return false;
  }

}
