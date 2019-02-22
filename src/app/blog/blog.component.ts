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
  docList: any[] = new Array();

  constructor(public articleService: ArticleService) {
        let doc1 = {
          key: "XJjxJ46OvQkKTADs2yhP",
          value: '../../assets/pdf/5SimpleDailyStrategiesEnergy.pdf'
        }
        let doc2 = {
          key: "1IGZS0ECUAmclblAOg5k",
          value: '../../assets/pdf/FoodSafety.pdf'
        }
        let doc3 = {
          key: "20nPfb7tFoklTchqrHFV",
          value: '../../assets/pdf/HowYouCanContinue.pdf'
        }
        let doc4 = {
          key: "GF8dBpAI9ioWlFNWXoYZ",
          value: '../../assets/pdf/MealTiming.pdf'
        }
        let doc5 = {
          key: "MQv3Z7OrIoOormUmToMz",
          value: '../../assets/pdf/ProcessedFood.pdf'
        }
        let doc6 = {
          key: "cesMEulkPD7ORqpJi7r7",
          value: '../../assets/pdf/FestivelyFit.pdf'
        }
        let doc7 = {
          key: "qllqYkjBu1ERdezhdWXq",
          value: '../../assets/pdf/ExerciseAndRecovery.pdf'
        }
        let doc8 = {
          key: "tzOwBwWc29eMoJPedrE5",
          value: '../../assets/pdf/FourDietsThatActuallyWork.pdf'
        }


        this.docList.push(doc1, doc2, doc3, doc4, doc5, doc6, doc7, doc8);
    
   }



  ngOnInit() {
   this.articles = this.articleService.getArticles();
      this.articles = this.sortedArticles();
  }

  sortedArticles(): any[]{
  return this.articles.map(data => data.sort((a,b) => b.data.votes - a.data.votes));
}

  getPost(postId){
    let result = this.docList.find(val => val.key == postId);
      this.pdfSrc = result.value;
    }
}
