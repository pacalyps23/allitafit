import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  public exercises: any;
  private REST_API = "https://wger.de/api/v2/"

  constructor(private http: HttpClient) {

   }

   getExercies(): any {
     this.exercises = new Array<any>();
     this.exercises.push(this.getExerciseById(289));
     this.exercises.push(this.getExerciseById(344));
     return this.exercises;
   }

   getExerciseById(id: number): any {
     return this.http.get(this.REST_API+"exercise/" + id)
   }
}
