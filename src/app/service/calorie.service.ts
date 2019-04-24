import { Injectable, OnInit, Input } from '@angular/core';
import { Calorie } from '../cardio/calorie';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import { whenRendered } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class CalorieService {
  calorieRef: AngularFirestoreCollection<Calorie>;
  calories: any;
  calorie: Observable<any>;

  constructor(private db: AngularFirestore, private toastr: ToastrService) {
    this.calorieRef = this.db.collection<Calorie>('calorie');
    
   }

   getAllCaloreis(): any {
     this.calorieRef = this.db.collection('calorie')
     return this.calorieRef.snapshotChanges().
     map(action => {
       return action.map(a => {
         const data = a.payload.doc.data() as Calorie;
         const id = a.payload.doc.id;
         return { id, data };
       });
     });
   }

   addCalories(calorie: Calorie){
     var data = JSON.parse(JSON.stringify(calorie));
     this.calorieRef.add(data)
     .then(_=> this.toastr.success("Calories Submitted"))
     .catch(_=> this.toastr.error("Cannot Send Calories"));
   }

   getCalorie(email): Observable<any> {
      return this.db.collection('calorie', ref => ref.where('email', '==', email) ).snapshotChanges().
     map(action => {
       return action.map(a => {
         const data = a.payload.doc.data() as Calorie;
         const id = a.payload.doc.id;
         return {id, data }
       });
     });
   }

   deleteCalorie(postId){
     this.db.collection('calorie').doc(postId).delete().then(_ => alert("Delete Article"));
   }
}
