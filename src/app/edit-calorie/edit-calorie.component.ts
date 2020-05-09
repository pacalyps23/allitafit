import { Component, OnInit, Inject } from '@angular/core';
import { Calorie } from '../cardio/calorie';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-calorie',
  templateUrl: './edit-calorie.component.html',
  styleUrls: ['./edit-calorie.component.css']
})
export class EditCalorieComponent implements OnInit {

  public calorie: Calorie;

  constructor(private  dialogRef:  MatDialogRef<EditCalorieComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.calorie = this.data;
   }

  ngOnInit() {

  }

  save(){
    this.dialogRef.close(this.calorie);
  }

  close(){
    this.dialogRef.close();
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
