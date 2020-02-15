import { Component, OnInit } from '@angular/core';
import { Calorie } from '../cardio/calorie';
import { CalorieService } from '../service/calorie.service';
import { AuthService } from '../service/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.css']
})
export class CardioComponent implements OnInit {
  public calorie = new Calorie("", null, null, null, null, null, null, null, null);
  private user;
  public steps = new Array<Calorie>();
  calorieForm: FormGroup;

  public admin = false;


   public mobileWidth;

  constructor(private calService: CalorieService, private auth: AuthService, private fb: FormBuilder) {
    if(this.auth.isMobile()){
      this.mobileWidth = { "width": "900px"}
    }

    calService.getAllCaloreis().subscribe(data => {
       
      data.forEach(element => {
        element.data.week1Tot = element.data.week1.reduce((a, b) => a + b, 0);
        element.data.week2Tot = element.data.week2.reduce((a, b) => a + b, 0);
        element.data.half1 = element.data.week1Tot + element.data.week2Tot;
        element.data.week3Tot = element.data.week3.reduce((a, b) => a + b, 0);
        element.data.week4Tot = element.data.week4.reduce((a, b) => a + b, 0);
        element.data.half2 = element.data.week3Tot + element.data.week4Tot;
        element.data.allTot = element.data.half1 + element.data.half2;
        this.steps.push(element.data);
      });
      
      this.steps.sort(function(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    });
    

   }

  ngOnInit() {

  }

}
