import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from '../service/contact.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contact = new Contact("", "", "", "", "");
  mobileWidth;

  constructor(private messenger:ContactService, private auth: AuthService) { }

  addContact(message: Contact){
    this.messenger.addItem(message);
    this.reset();
  }

  ngOnInit() {
    if(this.auth.isMobile()){
      this.mobileWidth = { "width": "900px"}
    }
  }

  reset(){
    this.contact = new Contact("", "", "","","");
  }

}
