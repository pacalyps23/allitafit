import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public mobileWidth;

  constructor(private auth: AuthService) {
    if(auth.isMobile()){
      this.mobileWidth = { "width": "900px" }
    }
   }

  ngOnInit() {
  }

}
