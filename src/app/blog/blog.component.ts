import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ArticleService } from '../service/article-service.service';
import { docChanges } from '@angular/fire/firestore';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})


export class BlogComponent implements OnInit {
  articles: any;
  pdfSrc: string;
  post: Observable<any>;
  isLoaded: boolean = false;

  constructor(public articleService: ArticleService) {
    
   }



  ngOnInit() {
   this.articles = this.articleService.getArticles();
      this.articles = this.sortedArticles();
  }

  sortedArticles(): any[]{
  return this.articles.map(data => data.sort((a,b) => b.data.votes - a.data.votes));
}

  getPost(postId){
    this.post = this.articleService.getItem(postId);
    this.post.subscribe(data => {
      this.pdfSrc = data.fileUrl;
      console.log(this.pdfSrc);
    });
    }

    afterLoadComplete(pdfData: any) {
      this.isLoaded = true;
    }
}
