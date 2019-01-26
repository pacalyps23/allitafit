import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  postsCol: AngularFirestoreCollection<Article>;
  articles: any;

  post: Observable<any>;

  constructor(private afs: AngularFirestore) {
   }



  ngOnInit() {
    this.postsCol = this.afs.collection('article');
    this.articles = this.postsCol.snapshotChanges()
      .map(actions => { return actions.map(a => {
        const data = a.payload.doc.data() as Article;
        const id = a.payload.doc.id;
        return { id, data };
    });
  });
      // .map(actions => {
      //   return actions.map(a => {
      //     const data = a.payload.doc.data() as Article;
      //     const id = a.payload.doc.id;
      //     return { id, data};
      //   });
      //});
      this.articles = this.articles.map(data => data.sort((a,b)=> b.data.votes - a.data.votes));
  }

  sortedArticles(): any[]{
  return this.articles.map(data => data.sort((a,b) => b.data.votes - a.data.votes));
}

  getPost(postId){
    console.log(postId)
    this.post = this.afs.collection('article').doc(postId).valueChanges();
  }

}
