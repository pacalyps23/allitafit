import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private contact = new Contact("", "", "", "", "");

  constructor() { }

  addContact(message: Contact){
    console.log(message);
  }

  ngOnInit() {
  }

}
