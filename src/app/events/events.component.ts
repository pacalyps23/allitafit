import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { EventService } from '../service/event-service.service';
import { Event } from '../single-event/event.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
events: Array<Observable<Event>>;
mobileWidth;

  constructor(private eventService: EventService, private auth: AuthService) {
    this.events = this.eventService.getEvents();
   }

  ngOnInit() {
    if(this.auth.isMobile()){
      this.mobileWidth = { "width": "900px"}
    }
  }

}
