import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Article } from './article.model'
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cscClass = 'row';
@Input() article: any;

postsCol: AngularFirestoreCollection<Article>;
articles: any;

  constructor(private afs: AngularFirestore, private blogComp: BlogComponent) {

   }

voteUp(postId){
  this.afs.collection('article').doc(postId).update({votes: this.article.data.votes + 1 });
  return false;//tries to call parent class so it tries to reloasd if you don't make it return false
}

voteDown(postId){
  this.afs.collection('article').doc(postId).update({ votes: this.article.data.votes - 1 });
  return false;
}

  ngOnInit() {

  }

}
