import { Injectable, OnInit, Input } from '@angular/core';
import { Article } from '../article/article.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ArticleService implements OnInit {
  articleRef: AngularFirestoreCollection<Article>;
  articles: any;
  post: Observable<any>;
  


  constructor(private db: AngularFirestore) {
    this.articleRef = this.db.collection<Article>('article');

  }

  ngOnInit() {
    this.articles = this.getArticles();
  }

  getArticles(): any {
    this.articleRef = this.db.collection('article');
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
    this.articleRef.add(data).then(_ => alert("Added Article"));
  }

  updateItem(postId, article) {
    this.db.collection('article').doc(postId).update(article).then(_ => alert("Added Article"));
  }

  getItem(postId): Observable<any> {
    return this.db.collection('article').doc(postId).valueChanges();
  }

  deleteItem(postId): void {
    this.db.collection('article').doc(postId).delete().then(_ => alert("Delete Article"));
  }

}
