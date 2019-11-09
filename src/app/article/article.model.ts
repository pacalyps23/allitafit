export class Article{
    title: string;
    date: Date;
    description: string;
    fileUrl: string;
    thumbnailUrl: string;
    votes: number;
    voters: Array<String> = new Array;
  
    constructor(title: string, date: Date, description: string, fileUrl: string, thumbnailUrl: string, voters: Array<String>, votes?: number){
      this.title = title;
      this.date = date;
      this.description = description;
      this.fileUrl = fileUrl;
      this.thumbnailUrl = thumbnailUrl;
      this.votes = votes || 0;
      this.voters = voters;
    }
  
  }
  