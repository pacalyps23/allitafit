import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryLayout } from 'ngx-gallery';
import { GalleryService } from '../service/gallery.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  wbffGalleryImages: NgxGalleryImage[] = new Array();
  fitGalleryImages: NgxGalleryImage[] = new Array();

  constructor(private galleryService: GalleryService, private storage: AngularFireStorage) {
    for (var i = 51; i > 0; i--) {
      var reference = this.storage.ref(`gallery/WBFF/wbff${i}.JPG`);
      reference.getDownloadURL().subscribe(url => {
        this.wbffGalleryImages.push({
          small: url,
          medium: url,
          big: url
        });
      });
    }

    for(var j = 30; j > 0; j--){
      var ref = this.storage.ref(`gallery/FIT/fit${j}.JPG`);
      ref.getDownloadURL().subscribe(url => {
        this.fitGalleryImages.push({
          small: url,
          medium: url,
          big: url
        });
      });
    }
  }

  ngOnInit() {

    this.galleryOptions = [

      // max-width 800
      {
        //breakpoint: 800,
        width: '900px',
        height: '1400px',
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
