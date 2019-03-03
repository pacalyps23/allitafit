import { Injectable, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import { Image } from '../gallery/image.model';


@Injectable()
export class GalleryService implements OnInit {
  galleryRef: AngularFirestoreCollection<Image>;
  public wbffImages = new Array();
  


  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    this.galleryRef = this.db.collection<Image>('gallery');

  }

  ngOnInit() {
  }

  getWbffImages() {
    for (var i = 3; i > 0; i--) {
      var reference = this.storage.ref(`gallery/WBFF/wbff${i}.JPG`);
      reference.getDownloadURL().subscribe(data => {
        console.log(data);
        this.wbffImages.push(data);
      });
    }
    return this.wbffImages;
  }

}
