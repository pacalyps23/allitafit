import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Profile } from '../my-fitness/profile';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SlackService } from './slack.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileRef: AngularFirestoreCollection<Profile>;
  profiles: any;
  profile: Observable<any>;
  private webhook = "https://hooks.slack.com/services/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";
  private channel = "profile"

  constructor(private db: AngularFirestore, private toastr: ToastrService, private slack: SlackService) {
    this.profileRef = this.db.collection('profile', ref => ref.orderBy('date').orderBy('lname'));
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
      this.slack.postProfile(this.webhook, this.channel, profile.email);
   }

   getProfile(email): any {
     return this.db.collection('profile', ref => ref.where('email', '==', email)).valueChanges();
   }

}
