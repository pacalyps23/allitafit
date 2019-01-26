import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';
import { ArticleService } from '../service/article-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private article = new Article(null, null, null, null);

  constructor(public articleService: ArticleService){

  }

  addArticle(article: Article){
    console.log(article);
    this.articleService.addItem(article);
  }

  ngOnInit() {
  }

}
