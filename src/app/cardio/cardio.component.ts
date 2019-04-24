import { Component, OnInit } from '@angular/core';
import { Calorie } from '../cardio/calorie';
import { CalorieService } from '../service/calorie.service';
import { AuthService } from '../service/auth.service';
import { auth } from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.css']
})
export class CardioComponent implements OnInit {
  public calorie = new Calorie("", "", null, "");
  private user;
  public myCals;
  calorieForm: FormGroup;

  public admin = false;

   ama1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   ama2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   ama1Total: number;
   ama2Total: number;
   amaAll: number;

   anna1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   anna2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   anna1Total: number;
   anna2Total: number;
   annaAll: number;

   bruce1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   bruce2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   bruce1Total: number;
   bruce2Total: number;
   bruceAll: number;

   debra1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   debra2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   debra1Total: number;
   debra2Total: number;
   debraAll: number;

   evg1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   evg2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   evg1Total: number;
   evg2Total: number;
   evgAll: number;

   gwen1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   gwen2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   gwen1Total: number;
   gwen2Total: number;
   gwenAll: number;
   
   mart1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   mart2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   mart1Total: number;
   mart2Total: number;
   martAll: number;

   kiki1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   kiki2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   kiki1Total: number;
   kiki2Total: number;
   kikiAll: number;

   wella1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   wella2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   wella1Total: number;
   wella2Total: number;
   wellaAll: number;

   pam1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   pam2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   pam1Total: number;
   pam2Total: number;
   pamAll: number;

   pav1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   pav2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   pav1Total: number;
   pav2Total: number;
   pavAll: number;

   sim1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   sim2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   sim1Total: number;
   sim2Total: number;
   simAll: number;

   sham1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   sham2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   sham1Total: number;
   sham2Total: number;
   shamAll: number;

   son1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   son2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   son1Total: number;
   son2Total: number;
   sonAll: number;

   stacy1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   stacy2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   stacy1Total: number;
   stacy2Total: number;
   stacyAll: number;

   jess1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   jess2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   jess1Total: number;
   jess2Total: number;
   jessAll: number;

   irin1: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   irin2: number[] = [ 0, 0, 0, 0, 0, 0, 0];
   irin1Total: number;
   irin2Total: number;
   irinAll: number;
 

   public days = ["April 22", "April 23", "April 24", "April 25", "April 26", "April 27", "April 28", "April 29", "April 30", "May 1",
                  "May 2", "May 3", "May 4", "May 5"];

  constructor(private calService: CalorieService, private auth: AuthService, private fb: FormBuilder) {
    this.user = auth.getUser();

    this.ama1Total = this.ama1.reduce((partial_sum, a) => partial_sum + a); 
    this.ama2Total = this.ama2.reduce((partial_sum, a) => partial_sum + a);
    this.amaAll = this.ama1Total + this.ama2Total;

    this.anna1Total = this.anna1.reduce((a,b)=> a + b);
    this.anna2Total = this.anna2.reduce((a,b)=> a + b);
    this.annaAll = this.anna1Total + this.anna2Total;

    this.bruce1Total = this.bruce1.reduce((a,b)=> a + b);
    this.bruce2Total = this.bruce2.reduce((a,b)=> a + b);
    this.bruceAll = this.bruce1Total + this.bruce2Total;

    this.debra1Total = this.debra1.reduce((a,b)=> a + b);
    this.debra2Total = this.debra2.reduce((a,b)=> a + b);
    this.debraAll = this.debra1Total + this.debra2Total;

    this.evg1Total = this.evg1.reduce((a,b)=> a + b);
    this.evg2Total = this.evg2.reduce((a,b)=> a + b);
    this.evgAll = this.evg1Total + this.evg2Total;

    this.gwen1Total = this.gwen1.reduce((a,b)=> a + b);
    this.gwen2Total = this.gwen2.reduce((a,b)=> a + b);
    this.gwenAll = this.gwen1Total + this.gwen2Total;

    this.mart1Total = this.mart1.reduce((a,b)=> a + b);
    this.mart2Total = this.mart2.reduce((a,b)=> a + b);
    this.martAll = this.mart1Total + this.mart2Total;

    this.kiki1Total = this.kiki1.reduce((a,b)=> a + b);
    this.kiki2Total = this.kiki2.reduce((a,b)=> a + b);
    this.kikiAll = this.kiki1Total + this.kiki2Total;

    this.wella1Total = this.wella1.reduce((a,b)=> a + b);
    this.wella2Total = this.wella2.reduce((a,b) => a + b);
    this.wellaAll = this.wella1Total + this.wella2Total;

    this.pam1Total = this.pam1.reduce((a,b)=> a + b);
    this.pam2Total = this.pam2.reduce((a,b)=> a + b);
    this.pamAll = this.pam1Total + this.pam2Total;

    this.pav1Total = this.pav1.reduce((a,b)=> a + b);
    this.pav2Total = this.pav2.reduce((a,b)=> a + b);
    this.pavAll = this.pav1Total + this.pav2Total;

    this.sham1Total = this.sham1.reduce((a,b)=> a + b);
    this.sham2Total = this.sham2.reduce((a,b)=> a + b);
    this.shamAll = this.sham1Total + this.sham2Total;

    this.son1Total = this.son1.reduce((a,b)=> a + b);
    this.son2Total = this.son2.reduce((a,b)=> a + b);
    this.sonAll = this.son1Total + this.son2Total;

    this.stacy1Total = this.stacy1.reduce((a,b)=> a + b);
    this.stacy2Total = this.stacy2.reduce((a,b)=> a + b);
    this.stacyAll = this.stacy1Total + this.stacy2Total;

    this.jess1Total = this.jess1.reduce((a,b)=> a + b);
    this.jess2Total = this.jess2.reduce((a,b)=> a + b);
    this.jessAll = this.jess1Total + this.jess2Total;

    this.sim1Total = this.sim1.reduce((a,b)=> a + b);
    this.sim2Total = this.sim2.reduce((a,b)=> a + b);
    this.simAll = this.sim1Total + this.sim2Total;

    this.irin1Total = this.irin1.reduce((a,b)=> a + b);
    this.irin2Total = this.irin2.reduce((a,b)=> a + b);
    this.irinAll = this.irin1Total + this.irin2Total;

   }

  ngOnInit() {
    this.calService.getCalorie(this.user.email).subscribe(data => {
        this.myCals = data;
        console.log(this.myCals);
    });

    this.calorieForm = this.fb.group({
      calorieControl: ["April 22"]
    });
  }

  submitCardio(day, calories){
    console.log(day);
    console.log(calories);

    this.calorie = {
      calories: calories,
      day: day,
      email: this.user.email,
      name: this.user.displayName
    }
    this.calService.addCalories(this.calorie);
  }

  deleteCalorie(calorie){
    console.log(calorie);
    this.calService.deleteCalorie(calorie.id);
  }

}
