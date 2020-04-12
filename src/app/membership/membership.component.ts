import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  public mobileWidth;
  public mobileMarg;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.isMobile()) {
      this.mobileWidth = { "width": "900px", };
      this.mobileMarg = { "margin": "20px" };
    }
  }

}
