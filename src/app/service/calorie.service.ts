import { Injectable, OnInit, Input } from '@angular/core';
import { Calorie } from '../cardio/calorie';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';

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
       })
     });
   }

   addCalories(calorie: Calorie){
     var data = JSON.parse(JSON.stringify(calorie));
     this.calorieRef.add(data).then(_=> this.toastr.success("Calories Submitted"))
     .catch(err => this.toastr.error(`Cannot Send Calories: ${err}`));
   }

   getCalorie(email): Observable<any> {
      return this.db.collection('calorie', ref => ref.where('name', '==', email) ).valueChanges()
        .catch(err => `Error getting user calories because ${err}`);
   }

   deleteCalorie(postId){
     this.db.collection('calorie').doc(postId).delete().then(_ => this.toastr.success("Delete Article"))
     .catch(err => this.toastr.error(`Could not Delete: ${err}`));
   }

   updateCalorie(calorie, id){
     this.db.collection('calorie').doc(id).update(calorie).then(_=> this.toastr.success("Updated Successfully"))
     .catch(err => this.toastr.error(`Error Updating: ${err}`));
   }
}