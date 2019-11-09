import { Component, OnInit, Input } from '@angular/core';
import { LibraryComponent } from '../library/library.component';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {
  @Input() exercise: any;

  constructor(private library: LibraryComponent) {
      
   }

}
