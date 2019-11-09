import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { History } from '../my-fitness/history';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  historyRef: AngularFirestoreCollection<History>;
  allHistory: any;
  history: Observable<any>;

  constructor(private db: AngularFirestore, private tostr: ToastrService) {
    this.historyRef = this.db.collection<History>('history');
   }

   addHistory(history: History){
     var data = JSON.parse(JSON.stringify(history));
     this.historyRef.add(data)
      .then(_=> this.tostr.success("Weight has been added"))
      .catch(_=> this.tostr.error("Error adding weight"));
   }

   getHistory(email): Observable<any> {
      return this.db.collection('history', ref => ref.where('email', '==', email)).valueChanges();
   }
}
