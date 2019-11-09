export class Event{
    title: string;
    date: Date;
    description: string;
    location: string;
    thumbnailUrl: string;
    essentials: string;
    pics: string[];
    signUps: string[];
  
    constructor({ title, date, description, thumbnailUrl, location, essentials, pics }: { title: string; date: Date; description: string; 
      thumbnailUrl: string; location: string; essentials?: string; pics: string[]; signUps: string[] }){
      this.title = title;
      this.date = date;
      this.description = description;
      this.location = location;
      this.thumbnailUrl = thumbnailUrl;
      this.essentials = essentials || null;
      this.pics = pics;
      this.signUps = this.signUps;
    }
  
  }
  