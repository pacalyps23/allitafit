import { Injectable, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Event } from '../single-event/event.model'
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EventService implements OnInit{
  eventRef: AngularFirestoreCollection<Event>
  events: any;
  post: Observable<any>;

  constructor(private db: AngularFirestore) {
    this.eventRef = this.db.collection<Event>('events');
   }

  ngOnInit() {
  }
  
  getEvents(): any {
    //this.eventRef = this.db.collection('events');
    return this.eventRef.snapshotChanges()
      .map(actions => {
        return actions.map(a =>{
          const data = a.payload.doc.data() as Event;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }

  addEvent(event: Event){
    var data = JSON.parse(JSON.stringify(event));
    this.eventRef.add(data).then(_=> alert("Added Event"))
      .catch(error => {
        alert(`Error uploading: ${error}`);
      });
  }

  updateEvent(id, article) {
    this.db.collection('events').doc(id).update(article)
      .then(_=> alert("Event Updated Successfully"))
      .catch(err => alert(`Error Updating Event: ${err}`))
  }

  getEvent(id): Observable<any> {
    return this.db.collection('events').doc(id).valueChanges();
  }

  deleteEvent(id): void {
    this.db.collection('events').doc(id).delete().then(_=> alert("Deleted Event"))
  }

  
}

