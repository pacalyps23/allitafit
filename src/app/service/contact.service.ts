import { Injectable, OnInit, Input } from '@angular/core';
import { Contact } from '../contact/contact';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ContactService implements OnInit {
  contactRef: AngularFirestoreCollection<Contact>;
  contancts: any;
  contact: Observable<any>;
  


  constructor(private db: AngularFirestore, private toastr: ToastrService) {
    this.contactRef = this.db.collection<Contact>('contacts');

  }

  ngOnInit() {
    this.contancts = this.getContacts();
  }

  getContacts(): any {
    this.contactRef = this.db.collection('contacts');
    return this.contactRef.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Contact;
          console.log(data);
          const id = a.payload.doc.id;
          return { id, data };
        });
      });

  }

  addItem(contact: Contact) {
    var data = JSON.parse(JSON.stringify(contact));
    console.log(data);
   this.contactRef.add(data)
   .then(_ => this.toastr.success("Message Sent", data.email))
    .catch(_ => this.toastr.error("Cannot Send Message"));
    
  }

  getItem(postId): Observable<any> {
    return this.db.collection('contacts').doc(postId).valueChanges();
  }

  deleteItem(postId): void {
    this.db.collection('contacts').doc(postId).delete().then(_ => alert("Delete Article"));
  }


}
