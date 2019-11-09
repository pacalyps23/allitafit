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
    location.reload();
  }

}
