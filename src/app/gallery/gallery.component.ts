import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { GalleryService } from '../service/gallery.service';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = new Array();

  constructor(private gallery: GalleryService) {
    this.gallery.getImages().subscribe(data => {
      data.forEach(element =>{
        this.galleryImages.push({
          small: element.data.imageUrl,
          medium: element.data.imageUrl,
          big: element.data.imageUrl
        });
      });
    });
   }

  ngOnInit() {

    this.galleryOptions = [
      {
        width: '1200px',
        height: '800px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

  }


}
