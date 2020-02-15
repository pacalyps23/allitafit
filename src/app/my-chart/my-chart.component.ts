import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../service/history.service';
import { AuthService } from '../service/auth.service';
//import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
  public myHistory;
  public email;

  constructor(private historyService: HistoryService, private auth: AuthService) {
    this.email = auth.getUser().email;
   }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          suggestedMin: 120,
          suggestedMax: 200
        },
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
      this.historyService.getHistory(this.email).subscribe(data => {
      data.map(element => {
        var formatDate = element.date.split('T')[0];
        this.barChartLabels.push(formatDate);
        this.barChartData[0].data.push(element.weight);
      });
    });
    }catch{
      console.log("No History Found");
    }
    
  }

}
