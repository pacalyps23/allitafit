import { Component, OnInit, Input } from '@angular/core';
import { ExerciseService } from '../service/exercise.service'; 
import { Exercise } from './exercise.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  exercises: Array<Exercise> = new Array();
  mobileWidth;

  constructor(private exerciseService: ExerciseService, private auth: AuthService) {
      exerciseService.getExercies().forEach(element => {
        console.log(element);
        element.subscribe(data => this.exercises.push(data));
      });
      console.log(this.exercises);
   }

   getExercise(exercise: any){
     console.log(exercise);
   }

   ngOnInit() {
    if(this.auth.isMobile()){
      this.mobileWidth = { "width": "900px"}
    }
   }

}
