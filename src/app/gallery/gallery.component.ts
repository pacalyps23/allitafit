import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryLayout } from 'ngx-gallery-9';
import { GalleryService } from '../service/gallery.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  wbffGalleryImages: NgxGalleryImage[] = new Array();
  fitGalleryImages: NgxGalleryImage[] = new Array();
  stGalleryImages: NgxGalleryImage[] = new Array();
  mobileWidth;


  constructor(private galleryService: GalleryService, private storage: AngularFireStorage, private auth: AuthService) {

    for (var j = 30; j > 0; j--) {
      let url = `../../assets/img/WBFF/wbff${j}.JPG`
      try {
        this.wbffGalleryImages.push({
          small: url,
          medium: url,
          big: url
        });
      } catch (err) {
        console.log("Not found" + err.message);
      }

    }

    for (var j = 24; j > 0; j--) {
      let url = `../../assets/img/Fit/fit${j}.JPG`
      try {
        this.fitGalleryImages.push({
          small: url,
          medium: url,
          big: url
        });
      } catch (err) {
        console.log(err.message);
      }

    }

    for (var j = 35; j > 0; j--) {
      let url = `../../assets/img/StrongerTogether/st${j}.jpg`
      try {
        this.stGalleryImages.push({
          small: url,
          medium: url,
          big: url
        });
      } catch (err) {
        console.log("Not found" + err.message)
      }

    }

  }

  ngOnInit() {

    if(this.auth.isMobile()){
      this.mobileWidth = { "width": "900px" };
    }

    this.galleryOptions = [

      // max-width 800
      {
        //breakpoint: 800,
        width: '800px',
        height: '1200px',
        imagePercent: 100,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        previewCloseOnClick: true,
        previewZoom: true,
        thumbnailsColumns: 6
      },
      // max-width 400

    ];

  }


}
