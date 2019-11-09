export class BMI {
    height: number;
    heightUnit: string;
    weight: number;
    weightUnit: string;
    
    constructor(height: number, heightUnit: string, weight: number, weightUnit: string){
        this.height = height;
        this.heightUnit = heightUnit;
        this.weight = weight;
        this.weightUnit = weightUnit;
    }
}