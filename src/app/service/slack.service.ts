import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlackService {
  webhook: string = 'https://hooks.slack.com/services/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';
  channel: string = 'events';
  bot: string = 'AllitaFit.com'
  emoji: string = 'tada';

  constructor(private http: HttpClient) { }

  postMessage(user, title){

    const options = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      )};

      const message = {
        channel: this.channel,
        username: this.bot,
        text: `${user} has signed up for *${title}*!`,
        icon_emoji: this.emoji
      }
    this.http.post(this.webhook, message, options).subscribe();
  }
}
