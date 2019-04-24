export class Calorie {
    name: string;
    email: string;
    calories: number;
    day: string;

    constructor(name:string, email: string, calories: number, day: string){
        this.email = email;
        this.name = name;
        this.calories = calories;
        this.day = day;
    }
}