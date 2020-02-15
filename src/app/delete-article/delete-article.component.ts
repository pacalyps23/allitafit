import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Article } from '../article/article.model';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {
  public postId: number;

  constructor(private  dialogRef:  MatDialogRef<DeleteArticleComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.postId = data;
   }

  ngOnInit() {
  }

  save(){
    this.dialogRef.close(this.postId);
  }

  close(){
    this.dialogRef.close();
  }

}
