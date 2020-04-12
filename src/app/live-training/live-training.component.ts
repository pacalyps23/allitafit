import { Component, OnInit } from '@angular/core';
import { LinkService } from '../service/link-service.service';
import { Link } from './link';
import { Observable } from 'rxjs/Rx';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-live-training',
  templateUrl: './live-training.component.html',
  styleUrls: ['./live-training.component.css']
})
export class LiveTrainingComponent implements OnInit {
  public mobileWidth;
  public mobileMarg;
  public link: string;
  public iframe;

  constructor(private linkService: LinkService, private sanitizer: DomSanitizer, private auth: AuthService) {
    this.link = this.linkService.getLinks();
    console.log(this.link);
  }


  ngOnInit() {
    if (this.auth.isMobile()) {
      this.mobileWidth = { "width": "900px", };
      this.mobileMarg = { "margin": "20px" };
    }
  }

  embedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

}
