import { Injectable } from '@angular/core';
import { Article } from '../article/article.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticleService {

  constructor(private db: AngularFirestore) {

  }

  addItem(article: Article) {
    console.log('adding item');
    this.db.collection('article').add(article);
  }
  updateItem(article: Article) {
    this.db.doc('article/' + article.title).update(article);
  }

}
