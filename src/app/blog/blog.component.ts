import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ArticleService } from '../service/article-service.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})


export class BlogComponent implements OnInit {
  articles: Array<any>;
  pdfSrc: string;
  post: Observable<any>;
  isLoaded: boolean = false;
  mobileWidth;
  user: any = null;

  constructor(private articleService: ArticleService, private auth: AuthService) {
      if(auth.isMobile()){
        this.mobileWidth = { "width": "900px" } 
      }
      this.user = auth.getUser();
   }



  ngOnInit() {
   this.articles = this.articleService.getArticles();
   this.articles = this.sortedArticles();
  }

  sortedArticles(): any[]{
  return this.articles.map(data => data.sort((a,b) => +new Date(b.data.date) - +new Date(a.data.date) ));
}

  getPost(postId){
    this.post = this.articleService.getItem(postId);
    this.post.subscribe(data => {
      this.pdfSrc = data.fileUrl;
    });
    }

    afterLoadComplete(pdfData: any) {
      this.isLoaded = true;
    }
}
