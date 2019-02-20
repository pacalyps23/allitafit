import { Injectable, OnInit, Input } from '@angular/core';
import { Contact } from '../contact/contact';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ContactService implements OnInit {
  contactRef: AngularFirestoreCollection<Contact>;
  contancts: any;
  contact: Observable<any>;
  


  constructor(private db: AngularFirestore) {
    this.contactRef = this.db.collection<Contact>('contancts');

  }

  ngOnInit() {
    this.contancts = this.getContacts();
  }

  getContacts(): any {
    this.contactRef = this.db.collection('article');
    return this.contactRef.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Contact;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });

  }

  addItem(contact: Contact) {
    var data = JSON.parse(JSON.stringify(contact));
    console.log('adding contanct');
    this.contactRef.add(data).then(_ => alert("Added Contact"));
  }

  getItem(postId): Observable<any> {
    return this.db.collection('contanct').doc(postId).valueChanges();
  }

  deleteItem(postId): void {
    this.db.collection('contact').doc(postId).delete().then(_ => alert("Delete Article"));
  }


}
