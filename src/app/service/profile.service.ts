import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Profile } from '../my-fitness/profile';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
//import { e } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileRef: AngularFirestoreCollection<Profile>;
  profiles: any;
  profile: Observable<any>;

  constructor(private db: AngularFirestore, private toastr: ToastrService) {
    this.profileRef = this.db.collection('profile', ref => ref.orderBy('lname'));
   }

   getAllProfiles(): any {
     return this.profileRef.snapshotChanges().map(action =>{
      return action.map(a => {
        const data = a.payload.doc.data() as Profile;
        data.info = false;
        const id = a.payload.doc.id;
        return { id, data };
      })
     });
   }

   addProfile(profile: Profile){
     var data = JSON.parse(JSON.stringify(profile));
     this.profileRef.add(data)
      .then(_=> this.toastr.success("Profile Created!"))
      .catch(_=> this.toastr.error("Cannot Create Profile"));
   }

   getProfile(email): any {
     return this.db.collection('profile', ref => ref.where('email', '==', email)).valueChanges();
   }

}
