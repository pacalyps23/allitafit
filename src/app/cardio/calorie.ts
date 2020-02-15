export class Calorie {
    name: string;
    week1: Array<number>;
    week2: Array<number>;
    week3: Array<number>;
    week4: Array<number>;

    constructor(name:string, week1: Array<number>, week2:Array<number>, week3:Array<number>, 
        week4:Array<number>, week1Tot:number, week2Tot: number, week3Tot:number, week4Tot:number){
        this.name = name;
        this.week1 = week1;
        this.week2 = week2;
        this.week3 = week3;
        this.week4 = week4;
    }
}