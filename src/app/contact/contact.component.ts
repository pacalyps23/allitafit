import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contact = new Contact("", "", "", "", "");

  constructor(private messenger:ContactService) { }

  addContact(message: Contact){
    this.messenger.addItem(message);
    this.reset();
  }

  ngOnInit() {
  }

  reset(){
    this.contact = new Contact("", "", "","","");
  }

}
