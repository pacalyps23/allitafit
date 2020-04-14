import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  public mobileWidth;
  public mobileMarg;
  public active;

  constructor(private auth: AuthService, private profileService: ProfileService) {
  }

  ngOnInit() {
    if (this.auth.isMobile()) {
      this.mobileWidth = { "width": "900px", };
      this.mobileMarg = { "margin": "20px" };
    }


    if (this.auth.isLoggedIn()) {
      this.hasProfile();
    }
  }

  hasProfile() {
    this.profileService.getProfile(this.auth.getUser().email).subscribe(data => {
      if (data[0] !== undefined) {
        console.log(data);
        this.active = true;
      } else {
        this.active = false;
      }
      console.log(this.active);
    });
  }

}
