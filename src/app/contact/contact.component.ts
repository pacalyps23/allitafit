import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from '../service/contact.service';
import { AuthService } from '../service/auth.service';
import { SlackService } from '../service/slack.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contact = new Contact("", "", "", "", "");
  mobileWidth;
  private webhook: string = 'https://hooks.slack.com/services/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';
  private channel: string = 'contact-me';


  constructor(private messenger:ContactService, private auth: AuthService, private slack: SlackService) { }

  addContact(message: Contact){
    this.messenger.addItem(message);
    this.slack.postContact(this.webhook, this.channel, message);
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
