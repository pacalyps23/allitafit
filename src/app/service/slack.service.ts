import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../contact/contact';

@Injectable({
  providedIn: 'root'
})
export class SlackService {
  bot: string = 'AllitaFit.com'
  emoji: string = 'tada';

  constructor(private http: HttpClient) { }

  postEvent(webhook, channel, user, title){

    const options = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};

      const message = {
        channel: channel,
        username: this.bot,
        text: `${user} has signed up for *${title}*!`,
        icon_emoji: this.emoji
      }
    this.http.post(webhook, message, options).subscribe();
  }

  postContact(webhook, channel, contact: Contact){

    const options = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};

      const message = {
        channel: channel,
        username: this.bot,
        text: `*From*: ${contact.first} ${contact.last}\n*Email*: ${contact.email}\n*Subject*: ${contact.subject}\n*Message*: ${contact.message}`,
        icon_emoji: 'mailbox'
      }
      this.http.post(webhook, message, options).subscribe();
  }

  postProfile(webhook, channel, email: string){
    const options = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};

      const message = {
        channel: channel,
        username: this.bot,
        text: `${email} has created a profile!`,
        icon_emoji: 'mailbox'
      }
      this.http.post(webhook, message, options).subscribe();
  }
}
