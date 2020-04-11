import { Component, OnInit } from '@angular/core';
import { LinkService } from '../service/link-service.service';
import { Link } from './link';
import { Observable } from 'rxjs/Rx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-live-training',
  templateUrl: './live-training.component.html',
  styleUrls: ['./live-training.component.css']
})
export class LiveTrainingComponent implements OnInit {
  public mobileWidth;
  public link: string;
  public iframe;

  constructor(private linkService: LinkService, private sanitizer: DomSanitizer) {
    this.link = this.linkService.getLinks();
   }


  ngOnInit() {
  }

  embedUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

}
