export class Calorie {
    name: string;
    week1: Array<Number>;
    week2: Array<Number>;
    week3: Array<Number>;
    week4: Array<Number>;

    constructor(name:string, week1: Array<Number>, week2:Array<Number>, week3:Array<Number>, 
        week4:Array<Number>, week1Tot:number, week2Tot: number, week3Tot:number, week4Tot:number){
        this.name = name;
        this.week1 = week1;
        this.week2 = week2;
        this.week3 = week3;
        this.week4 = week4;
    }
}