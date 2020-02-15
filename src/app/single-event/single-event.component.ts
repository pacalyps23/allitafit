import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Event } from '../single-event/event.model';
import { AuthService } from '../service/auth.service';
import { ProfileService } from '../service/profile.service';
import { EventService } from '../service/event-service.service';
import { ToastrService } from 'ngx-toastr';
import { SlackService } from '../service/slack.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css'],
})
export class SingleEventComponent implements OnInit {
  @Input() event: any;
  @HostBinding('attr.class') cscClass = 'row';
  public myCarouselOptions = { items: 3, dots: true, nav: true };
  loggedIn = false;
  myProfile = false;
  private user: string;
  eventSigned = false;
  mobileWidth;
  private webhook: string = 'https://hooks.slack.com/services/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';
  private channel: string = 'events';
  
  constructor(private auth: AuthService, private profileService: ProfileService,
    private eventService: EventService, private toastr: ToastrService,
    private slack: SlackService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    if (this.auth.isMobile()) {
      this.mobileWidth = { "width": "900px" }
    }
    if (this.auth.isLoggedIn()) {
      this.loggedIn = true;
      this.profileService.getProfile(this.auth.getUser().email).subscribe(data => {
        if (data[0] !== undefined) {
          this.user = data[0].email;
          this.myProfile = true;
          //this.loggedIn = false;
        } else {
          console.log("No Profile");
        }
      });
    }
  }


  signUpEvent(id) {
    this.eventSigned = true;
    let currEvent: Event = this.event.data;
    let eventTitle = currEvent.title;
    let signees = currEvent.signUps;

    if (signees.includes(this.user)) {
      this.toastr.info("Already Signed Up")
    }
    else {
      this.toastr.success("Successfully Signed Up!")
      if (currEvent.signUps[0] == "") {
        currEvent.signUps[0] = this.user;
      }
      else {
        currEvent.signUps.push(this.user);
      }

      this.eventService.updateEvent(id, currEvent);
      this.slack.postEvent(this.webhook, this.channel, this.user, eventTitle);
    }
    
  }


}

