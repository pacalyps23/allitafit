import { Injectable, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { Image } from '../gallery/image.model';


@Injectable()
export class GalleryService implements OnInit {
  galleryRef: AngularFirestoreCollection<Image>;
  images: any;
  post: Observable<any>;
  


  constructor(private db: AngularFirestore) {
    this.galleryRef = this.db.collection<Image>('gallery');

  }

  ngOnInit() {
    this.images = this.getImages();
    console.log(this.images);
  }

  getImages(): any {
    this.galleryRef = this.db.collection('gallery');
    return this.galleryRef.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Image;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });

  }


}
