import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { AuthService } from '../service/auth.service';
import { Profile } from '../my-fitness/profile';
import { empty } from 'rxjs';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
  @Input() profile: Profile;
  public myHistory;
  public email;

  constructor(private profileService: ProfileService, private auth: AuthService) {
    this.email = auth.getUser().email;
   }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Weight'
        }
      }],
      xAxes:[{
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }]
    }
  };
  public barChartLabels = new Array();
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: 'Pounds'}
  ];

  ngOnInit() {
    this.getMyChart();
  }

  getMyChart(){
    try{
      this.profileService.getProfile(this.email).subscribe(profile => {  
        if(profile[0].data.history[0] == null){
          console.log("No History Found");
          console.log(profile[0].data.history)
        }
        else{
          profile[0].data.history.map(element => {
            var formatDate = element.date.split('T')[0];
            this.barChartLabels.push(formatDate);
            this.barChartData[0].data.push(element.weight);        
          });
        }
    });
    }catch{
      console.log("No History Found");
    }
  }
    

}
