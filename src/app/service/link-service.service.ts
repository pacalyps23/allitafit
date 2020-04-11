import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Link } from '../live-training/link';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  linkRef: AngularFirestoreCollection<Link>;
  links: Array<any> = new Array();


  constructor(private db: AngularFirestore) {
    this.linkRef = this.db.collection('streams');
   }

   getLinks(): any {
     this.linkRef.ref.get().then(res => {
       if(res.docs.length == 0){
         console.log("No docs found");
       }else{
         res.docs.forEach(data => {
           if(this.matchDay(data.data().date))
            this.links.push(data.data().embed);
          })
       }
     }).catch(err =>{
       console.log("Error: " + err);
     });

     return this.links;

   }

   matchDay(timeStamp: any): boolean {
    var convert = new Date(timeStamp.seconds * 1000).toDateString();
    if(convert == new Date().toDateString()){
      return true;
    }
     return false;
  }
}
