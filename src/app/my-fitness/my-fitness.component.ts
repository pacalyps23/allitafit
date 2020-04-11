import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Profile } from './profile';
import { ProfileService } from '../service/profile.service';
import { BMI } from './bmi';
import { History } from './history';
import { HistoryService } from '../service/history.service';
import { MyChartComponent } from '../my-chart/my-chart.component';


@Component({
  selector: 'app-my-fitness',
  templateUrl: './my-fitness.component.html',
  styleUrls: ['./my-fitness.component.css']
})
export class MyFitnessComponent implements OnInit {
  public mobileWidth;
  public email;
  public noProfile = true;
  public profile: Profile = new Profile(null, null, null, null, null, null,null, null, null, null, null, [], null, null, [], [], null, 
    null, null, null, null, false, new Date);
  public bmi: BMI = new BMI(null, null, null, null)
  public output;
  public message;
  public history: History = new History(null, null, null);
  public health: Array<any> = [
    { "name": "High Blood Pressure", "selected": false}, 
    { "name": "Asthma", "selected": false},
    { "name": "Joint Problems", "selected": false},
    { "name": "Back Pain", "selected": false},
    { "name": "Breast Disease", "selected": false},
    { "name": "Scoliosis", "selected": false},
    { "name": "Cancer", "selected": false},
    { "name": "Diabetes", "selected": false},
    { "name": "Osteoporosis", "selected": false},
    { "name": "Hernia", "selected": false},
    { "name": "Thyroid Disease", "selected": false},
    { "name": "Obesity", "selected": false},
    { "name": "Liver/Kidney Disease", "selected": false},
    { "name": "Menopause", "selected": false},
    { "name": "Surgery (past year)", "selected": false},
    { "name": "Others", "selected": false},
    { "name": "Medications", "selected": false},
  ];

  constructor(private auth: AuthService, private profileService: ProfileService, private histService: HistoryService,
    private myChart: MyChartComponent) {
    if (auth.isMobile()) {
      this.mobileWidth = { "width": "900px" }
    }
    this.email = this.auth.getUser().email;

    profileService.getProfile(this.email).subscribe(data => {
      try{
         if (data[0].fname != null) {
          this.profile = data[0];
          this.noProfile = false;
          this.getHistory(this.email);
        }
      }catch{
        console.log("No user found");
      }
    });


  }

  ngOnInit() {
    window.scrollTo(0, 0)
  }

  submitProfile(profile: Profile, health) {
     health.filter(data => data.selected == true).map(data => {
       this.profile.date = new Date();
        this.profile.selectedHealth.push(data.name);
    });
    
    this.profile.email = this.email;
    this.profileService.addProfile(profile);
  }

  cumputeBMI(bmi: BMI) {
    let metHeight = bmi.height;
    let metWeight = bmi.weight;
    //Convert all units to metric
    if (bmi.heightUnit == "inches"){
      metHeight = bmi.height / 39.3700787;
    } 
    if (bmi.weightUnit == "lb"){
      metWeight = bmi.weight / 2.20462;
    } 

    //Perform calculation
    var BMI = metWeight / Math.pow(metHeight, 2);

    //Display result of calculation
     this.output = Math.round(BMI * 100) / 100;

    if (this.output < 18.5)
      this.message = "Underweight";
    if (this.output >= 18.5 && this.output <= 25)
      this.message = "Normal";
    if (this.output >= 25 && this.output <= 30)
      this.message = "Overweight";
    if (this.output > 30)
      this.message = "Obsese";
  }

  getHistory(email){
    this.histService.getHistory(email).subscribe(data =>{
      if(data != null){
        this.history = data;
        this.myChart.email = this.email;
      }
    });
  }

  submitWeight(form){
    this.history = {
      email: this.email,
      date: new Date,
      weight: form.value.weight
    }
    this.histService.addHistory(this.history);
    
  }



}
