export class Article{
    title: string;
    date: string;
    description: string;
    votes: number;
  
    constructor(title: string, date: string, description: string, votes?: number){
      this.title = title;
      this.date = date;
      this.description = description;
      this.votes = votes || 0;
    }
  
  }
  