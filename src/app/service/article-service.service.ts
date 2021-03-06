import { Injectable, OnInit, Input } from '@angular/core';
import { Article } from '../article/article.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ArticleService implements OnInit {
  articleRef: AngularFirestoreCollection<Article>;
  //articles: any;
  post: Observable<any>;
  


  constructor(private db: AngularFirestore) {
    this.articleRef = this.db.collection<Article>('article');

  }

  ngOnInit() {
  }

  getArticles(): any {
    return this.articleRef.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Article;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });

  }

  addItem(article: Article) {
    var data = JSON.parse(JSON.stringify(article));
    console.log('adding item');
    this.articleRef.add(data).then(_ => alert("Added Article"))
      .catch(err => `Error adding user: ${err}`)
  }

  updateItem(postId, article) {
    this.db.collection('article').doc(postId).update(article)
      .then(_ => alert("Updated Article"))
      .catch(err => alert(`Error Updating Article: ${err}`));
  }

  getItem(postId): Observable<any> {
    return this.db.collection('article').doc(postId).valueChanges()
      .catch(err => `Error getting item ${postId} because ${err}`);
  }

  deleteItem(postId): void {
    this.db.collection('article').doc(postId).delete().then(_ => alert("Delete Article"))
      .catch(err => `Error deleting article with Id: ${postId} because ${err}`);
  }

}
