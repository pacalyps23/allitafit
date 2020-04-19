import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from '../article/article.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  public article: Article;

  constructor(private  dialogRef:  MatDialogRef<EditArticleComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.article = this.data;
   }

  ngOnInit() {

  }

  save(){
    this.dialogRef.close(this.article);
  }

  close(){
    this.dialogRef.close();
  }

}
