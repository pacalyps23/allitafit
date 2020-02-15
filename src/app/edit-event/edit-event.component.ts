import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
import { Event } from '../single-event/event.model';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  public event: Event;

  constructor(
    private  dialogRef:  MatDialogRef<EditEventComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.event = this.data;
    
   }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.event);
}

close() {
    this.dialogRef.close();
}

}
