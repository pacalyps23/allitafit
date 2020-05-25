import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Profile } from './profile';
import { ProfileService } from '../service/profile.service';
import { BMI } from './bmi';
import { MyChartComponent } from '../my-chart/my-chart.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-my-fitness',
  templateUrl: './my-fitness.component.html',
  styleUrls: ['./my-fitness.component.css']
})
export class MyFitnessComponent implements OnInit {
  public mobileWidth;
  public id;
  public email;
  public noProfile = true;
  public profile: Profile = new Profile(null, null, null, null, null, null,null, null, null, null, null, [], null, null, [], [], null, 
    null, null, null, null, false, new Date, new Array<any>());
  public bmi: BMI = new BMI(null, null, null, null)
  public output;
  public message;
  public weight;
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

  constructor(private auth: AuthService, private profileService: ProfileService,
    private myChart: MyChartComponent, private toastr: ToastrService) {
    
    if (auth.isMobile()) {
      this.mobileWidth = { "width": "900px" }
    }
    this.email = this.auth.getUser().email;

    profileService.getProfile(this.email).subscribe(data => {
      try{
         if (data[0].data.fname != null) {
          this.profile = data[0].data;
          this.id = data[0].id;
          this.noProfile = false;
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

  submitWeight(weight: any){
    if(isNaN(weight)){
      this.toastr.error("<h4>Weight must be a number!</h4>", "ERROR", 
      { closeButton: true, enableHtml: true });
      this.weight = null;
      return;
    }
    var history = {
      date: new Date().toISOString(),
      weight: weight
    }
    if(this.profile.history[0] == null){
      
      this.profile.history[0] = history;
    }
    else{
      this.profile.history.push(history);
    }
    this.profileService.editProfile(this.profile, this.id);
    this.weight = null;
  }



}
