export class Profile {
    fname: string;
    lname: string;
    dob: Date;
    sex: string;
    email: string;
    phone: string;
    activity: string;
    avgWeight: number;
    diet: string;
    exercise: string;
    program: string;
    selectedHealth: Array<any>;
    other: string;
    goals: string;
    reachGoals: Array<string>;
    steps: Array<string>
    time: string;
    notRecommended: string;
    meds: string;
    discipline: string;
    together: string;
    info: boolean = false;

    constructor(fname: string, lname: string, dob: Date, sex: string, email: string, phone:string, activity: string, avgWeight: number,
        diet: string, exercise: string, program: string, selectedHealth: Array<string>, other: string, goals: string, reachGoals: Array<string>, 
        steps: Array<string>, time: string, notRecommended: string, meds: string, discipline: string, together: string, info: boolean){
        this.email = email;
        this.fname = fname;
        this.lname = lname;
        this.dob = dob;
        this.sex = sex;
        this.phone = phone;
        this.activity = activity;
        this.avgWeight = avgWeight;
        this.diet = diet;
        this.exercise = exercise;
        this.program = program;
        this.selectedHealth = selectedHealth;
        this.other = other;
        this.goals = goals;
        this.reachGoals = reachGoals;
        this.steps = steps;
        this.time = time;
        this.notRecommended = notRecommended,
        this.meds = meds;
        this.discipline = discipline;
        this.together = together;
        this.info = info;
    }
}